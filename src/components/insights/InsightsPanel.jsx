import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SMART_INSIGHTS } from '../../data/dataset'
import { Lightbulb, ChevronRight, Sparkles, AlertTriangle, TrendingUp, MapPin, Package } from 'lucide-react'

const ICONS = { 'Critical': AlertTriangle, 'Revenue': TrendingUp, 'Growth': TrendingUp, 'Regional': MapPin, 'Product': Package }

export default function InsightsPanel({ storyStep, isStoryActive }) {
  const [open, setOpen] = useState(1)
  const storyMap = { 1:0, 2:1, 3:2, 4:3, 5:4 }
  const storyHL = isStoryActive ? storyMap[storyStep] : null

  return (
    <motion.div
      initial={{ opacity:0, y:18 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay:0.55 }}
      className="glass-card rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background:'rgba(193,18,31,0.15)' }}>
            <Lightbulb size={14} style={{ color:'#FFB3B3' }} />
          </div>
          <div>
            <h3 className="font-display font-bold text-base" style={{ color:'var(--text-primary)' }}>Smart Insights</h3>
            <p className="text-xs" style={{ color:'var(--text-muted)' }}>Click any insight to expand</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold"
          style={{ background:'rgba(193,18,31,0.12)', color:'#FFB3B3', border:'1px solid rgba(193,18,31,0.22)' }}>
          <Sparkles size={11} /> {SMART_INSIGHTS.length} found
        </div>
      </div>

      <div className="space-y-2">
        {SMART_INSIGHTS.map((ins, i) => {
          const Icon = ICONS[ins.category] || TrendingUp
          const isHL = storyHL === i
          return (
            <motion.div
              key={ins.id}
              initial={{ opacity:0, x:-14 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay:0.6 + i*0.08 }}
              onClick={() => setOpen(v => v === ins.id ? null : ins.id)}
              className="rounded-xl p-3.5 cursor-pointer transition-all duration-300"
              style={{
                borderLeft: `3px solid ${ins.color}`,
                background: isHL ? `${ins.color}12` : open === ins.id ? `${ins.color}08` : 'rgba(255,255,255,0.02)',
                border: isHL ? `1px solid ${ins.color}50` : '1px solid transparent',
                borderLeftColor: ins.color,
                boxShadow: isHL ? `0 0 20px ${ins.color}20` : 'none',
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background:`${ins.color}18` }}>
                    <Icon size={12} style={{ color:ins.color }} />
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background:`${ins.color}18`, color:ins.color }}>
                    {ins.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-lg" style={{ background:`${ins.color}15`, color:ins.color }}>
                    {ins.metric}
                  </span>
                  <ChevronRight size={13} style={{ color:'var(--text-muted)', transform: open===ins.id ? 'rotate(90deg)' : 'none', transition:'transform 0.2s' }} />
                </div>
              </div>
              <p className="text-sm font-semibold mt-2" style={{ color:'var(--text-primary)' }}>{ins.title}</p>
              <AnimatePresence>
                {open === ins.id && (
                  <motion.div
                    initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }}
                    transition={{ duration:0.25 }} className="overflow-hidden"
                  >
                    <p className="text-xs leading-relaxed mt-2 mb-3" style={{ color:'var(--text-secondary)' }}>{ins.detail}</p>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold"
                      style={{ background:`${ins.color}12`, color:ins.color }}>
                      <Sparkles size={11} /> {ins.action}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
