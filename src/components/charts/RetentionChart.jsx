import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { RETENTION_TREND } from '../../data/dataset'
import { TrendingUp } from 'lucide-react'

function Tip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background:'rgba(13,10,11,0.96)', border:'1px solid rgba(193,18,31,0.30)', borderRadius:12, padding:'10px 14px', boxShadow:'0 16px 40px rgba(0,0,0,0.4)' }}>
      <p className="font-semibold text-sm mb-2" style={{ color:'var(--text-primary)' }}>{label} 2024</p>
      {payload.map(p => (
        <div key={p.dataKey} className="flex items-center gap-2 mb-1 text-xs">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span style={{ color:'var(--text-secondary)' }}>{p.name}:</span>
          <span className="font-bold" style={{ color: p.color }}>{p.value}%</span>
        </div>
      ))}
    </div>
  )
}

export default function RetentionChart({ highlighted }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={`glass-card rounded-2xl p-5 transition-all duration-400 ${highlighted ? 'story-highlight' : ''}`}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp size={15} style={{ color:'#52B788' }} />
            <h3 className="font-display font-bold text-base" style={{ color:'var(--text-primary)' }}>Retention Trend</h3>
          </div>
          <p className="text-xs" style={{ color:'var(--text-muted)' }}>Jan–Dec 2024 · Monthly</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
          style={{ background:'rgba(82,183,136,0.12)', border:'1px solid rgba(82,183,136,0.22)' }}>
          <TrendingUp size={12} style={{ color:'#52B788' }} />
          <span className="text-xs font-bold" style={{ color:'#52B788' }}>+3.6pp YoY</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={255}>
        <AreaChart data={RETENTION_TREND} margin={{ top:5, right:5, bottom:0, left:-12 }}>
          <defs>
            <linearGradient id="gRet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C1121F" stopOpacity={0.28} />
              <stop offset="95%" stopColor="#C1121F" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gChu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E8C547" stopOpacity={0.22} />
              <stop offset="95%" stopColor="#E8C547" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
          <XAxis dataKey="month" tick={{ fill:'var(--text-muted)', fontSize:11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill:'var(--text-muted)', fontSize:11 }} axisLine={false} tickLine={false} domain={[85,100]} tickFormatter={v=>`${v}%`} />
          <Tooltip content={<Tip />} />
          <ReferenceLine y={95} stroke="rgba(193,18,31,0.25)" strokeDasharray="4 4" />
          <Area type="monotone" dataKey="retention" name="Retention" stroke="#C1121F" strokeWidth={2.5} fill="url(#gRet)" dot={false} activeDot={{ r:5, fill:'#C1121F', stroke:'#fff', strokeWidth:2 }} animationDuration={1400} />
          <Area type="monotone" dataKey="churn" name="Churn" stroke="#E8C547" strokeWidth={2} fill="url(#gChu)" dot={false} activeDot={{ r:4, fill:'#E8C547', stroke:'#fff', strokeWidth:2 }} animationDuration={1600} />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
