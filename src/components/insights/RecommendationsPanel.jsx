import { useState } from 'react'
import { motion } from 'framer-motion'
import { RECOMMENDATIONS } from '../../data/dataset'
import { Target, CheckCircle, Circle, ArrowRight, Sparkles } from 'lucide-react'

const EFFORT_COLOR = { Low:'#52B788', Medium:'#E8C547', High:'#E63946' }

export default function RecommendationsPanel() {
  const [done, setDone] = useState({})
  const doneCount = Object.values(done).filter(Boolean).length

  return (
    <motion.div
      initial={{ opacity:0, y:18 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay:0.6 }}
      className="glass-card rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background:'rgba(193,18,31,0.15)' }}>
            <Target size={14} style={{ color:'#FFB3B3' }} />
          </div>
          <div>
            <h3 className="font-display font-bold text-base" style={{ color:'var(--text-primary)' }}>Action Plan</h3>
            <p className="text-xs" style={{ color:'var(--text-muted)' }}>Prioritised by revenue impact</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs" style={{ color:'var(--text-muted)' }}>{doneCount}/{RECOMMENDATIONS.length} complete</span>
          <div className="text-right">
            <p className="font-display font-bold text-base" style={{ color:'#52B788' }}>+$101K</p>
            <p className="text-xs" style={{ color:'var(--text-muted)' }}>Total MRR impact</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {RECOMMENDATIONS.map((rec, i) => (
          <motion.div
            key={i}
            initial={{ opacity:0, x:16 }}
            animate={{ opacity:1, x:0 }}
            transition={{ delay:0.65 + i*0.07 }}
            onClick={() => setDone(d => ({ ...d, [i]: !d[i] }))}
            whileHover={{ x: 3 }}
            className="flex items-start gap-3 p-3.5 rounded-xl cursor-pointer group transition-all"
            style={{ background: done[i] ? 'rgba(82,183,136,0.05)' : 'rgba(255,255,255,0.02)', opacity: done[i] ? 0.6 : 1 }}
          >
            <div className="flex-shrink-0 mt-0.5">
              {done[i]
                ? <CheckCircle size={16} style={{ color:'#52B788' }} />
                : <Circle size={16} style={{ color:'var(--text-muted)' }} className="group-hover:text-red-400 transition-colors" />
              }
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-bold px-1.5 py-0.5 rounded" style={{ background:`${rec.color}20`, color:rec.color }}>
                  {rec.priority}
                </span>
                <p className={`text-sm font-semibold ${done[i] ? 'line-through' : ''}`} style={{ color:'var(--text-primary)' }}>
                  {rec.title}
                </p>
              </div>
              <p className="text-xs mb-2" style={{ color:'var(--text-secondary)' }}>{rec.impact}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background:`${EFFORT_COLOR[rec.effort]}15`, color:EFFORT_COLOR[rec.effort] }}>
                  {rec.effort} effort
                </span>
                <span className="text-xs font-bold" style={{ color:'#52B788' }}>{rec.revenue}</span>
              </div>
            </div>
            <ArrowRight size={13} style={{ color:'var(--text-muted)', flexShrink:0, marginTop:2 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t flex items-center justify-between" style={{ borderColor:'var(--glass-border)' }}>
        <div className="flex items-center gap-1.5 text-xs" style={{ color:'var(--text-muted)' }}>
          <Sparkles size={11} style={{ color:'#E8C547' }} /> Estimated impact over 6 months
        </div>
        <span className="font-display font-extrabold text-lg" style={{ color:'#52B788' }}>+$101K MRR</span>
      </div>
    </motion.div>
  )
}
