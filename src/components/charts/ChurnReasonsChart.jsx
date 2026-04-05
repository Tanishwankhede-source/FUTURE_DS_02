import { motion } from 'framer-motion'
import { CHURN_REASONS } from '../../data/dataset'
import { MessageSquare, TrendingUp, TrendingDown, Minus } from 'lucide-react'

const BAR_COLORS = ['#E63946','#C1121F','#E8C547','#2EC4B6','#C9A87C','#52B788']

export default function ChurnReasonsChart({ highlighted }) {
  const max = Math.max(...CHURN_REASONS.map(r => r.pct))
  return (
    <motion.div
      initial={{ opacity:0, y:18 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay:0.5 }}
      className={`glass-card rounded-2xl p-5 transition-all duration-400 ${highlighted ? 'story-highlight' : ''}`}
    >
      <div className="flex items-center gap-2 mb-5">
        <MessageSquare size={15} style={{ color:'#E8C547' }} />
        <h3 className="font-display font-bold text-base" style={{ color:'var(--text-primary)' }}>Why Customers Leave</h3>
      </div>
      <div className="space-y-3">
        {CHURN_REASONS.map((r, i) => (
          <motion.div
            key={r.reason}
            initial={{ opacity:0, x:-16 }}
            animate={{ opacity:1, x:0 }}
            transition={{ delay:0.55 + i*0.07 }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-sm">{r.emoji}</span>
                <span className="text-sm font-medium" style={{ color:'var(--text-primary)' }}>{r.reason}</span>
              </div>
              <div className="flex items-center gap-1.5">
                {r.trend === 'up'   && <TrendingUp   size={11} style={{ color:'#E63946' }} />}
                {r.trend === 'down' && <TrendingDown  size={11} style={{ color:'#52B788' }} />}
                {r.trend === 'same' && <Minus         size={11} style={{ color:'var(--text-muted)' }} />}
                <span className="font-display font-bold text-sm" style={{ color:'var(--text-primary)' }}>{r.pct}%</span>
              </div>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background:'rgba(255,255,255,0.06)' }}>
              <motion.div
                initial={{ width:0 }}
                animate={{ width:`${(r.pct/max)*100}%` }}
                transition={{ delay:0.65 + i*0.07, duration:0.75, ease:[0.16,1,0.3,1] }}
                className="h-full rounded-full"
                style={{ background: BAR_COLORS[i] }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t" style={{ borderColor:'var(--glass-border)' }}>
        <p className="text-xs" style={{ color:'var(--text-muted)' }}>
          Based on exit surveys · <span style={{ color:'var(--text-secondary)' }}>667 churned customers</span> · Dec 2024
        </p>
      </div>
    </motion.div>
  )
}
