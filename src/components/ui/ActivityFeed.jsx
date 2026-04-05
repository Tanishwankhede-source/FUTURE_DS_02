import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LIVE_EVENTS } from '../../data/dataset'
import { Activity, UserX, UserCheck, TrendingUp, Star } from 'lucide-react'

const TYPE_ICON = { churn: UserX, retain: UserCheck, upgrade: TrendingUp, star: Star }

export default function ActivityFeed() {
  const [events, setEvents] = useState(LIVE_EVENTS.slice(0, 5))
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setTick(t => {
        const next = LIVE_EVENTS[(t + 5) % LIVE_EVENTS.length]
        setEvents(prev => [{ ...next, time: 'just now' }, ...prev.slice(0, 4)])
        return t + 1
      })
    }, 3800)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      initial={{ opacity:0, y:18 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay:0.52 }}
      className="glass-card rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Activity size={15} style={{ color:'#52B788' }} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-400 pulse-dot" style={{ display:'inline-block' }} />
          </div>
          <h3 className="font-display font-bold text-base" style={{ color:'var(--text-primary)' }}>Live Feed</h3>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
          style={{ background:'rgba(82,183,136,0.14)', color:'#52B788' }}>● Live</span>
      </div>
      <div className="space-y-1.5 overflow-hidden" style={{ maxHeight:230 }}>
        <AnimatePresence initial={false}>
          {events.map((ev, i) => {
            const Icon = TYPE_ICON[ev.type] || Activity
            return (
              <motion.div
                key={`${ev.user}-${i}-${tick}`}
                initial={{ opacity:0, y:-18, height:0 }}
                animate={{ opacity:1, y:0, height:'auto' }}
                exit={{ opacity:0, height:0 }}
                transition={{ duration:0.3 }}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center"
                  style={{ background:`${ev.color}18` }}>
                  <Icon size={13} style={{ color:ev.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold truncate" style={{ color:'var(--text-primary)' }}>{ev.user}</p>
                  <p className="text-xs truncate" style={{ color:'var(--text-secondary)' }}>{ev.action}</p>
                </div>
                <span className="text-xs flex-shrink-0" style={{ color:'var(--text-muted)' }}>
                  {ev.time || `${(i+1)*3}m ago`}
                </span>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
