import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { RETENTION_TREND } from '../../data/dataset'
import { DollarSign } from 'lucide-react'

function Tip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background:'rgba(13,10,11,0.96)', border:'1px solid rgba(232,197,71,0.30)', borderRadius:12, padding:'10px 14px' }}>
      <p className="font-semibold text-xs mb-1" style={{ color:'var(--text-primary)' }}>{label} 2024</p>
      <p className="text-xs" style={{ color:'#E8C547' }}>MRR: <strong>${(payload[0]?.value/1000).toFixed(0)}K</strong></p>
      <p className="text-xs" style={{ color:'#2EC4B6' }}>New customers: <strong>{payload[1]?.value}</strong></p>
    </div>
  )
}

export default function RevenueTrendChart() {
  return (
    <motion.div
      initial={{ opacity:0, y:18 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay:0.5 }}
      className="glass-card rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <DollarSign size={15} style={{ color:'#E8C547' }} />
          <h3 className="font-display font-bold text-base" style={{ color:'var(--text-primary)' }}>MRR Growth</h3>
        </div>
        <div className="text-right">
          <p className="font-display font-bold text-lg" style={{ color:'#E8C547' }}>$284.7K</p>
          <p className="text-xs" style={{ color:'var(--text-muted)' }}>+8.4% MoM</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={148}>
        <AreaChart data={RETENTION_TREND} margin={{ top:5, right:5, bottom:0, left:-28 }}>
          <defs>
            <linearGradient id="gMrr" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E8C547" stopOpacity={0.32} />
              <stop offset="95%" stopColor="#E8C547" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gNew" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2EC4B6" stopOpacity={0.28} />
              <stop offset="95%" stopColor="#2EC4B6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tick={{ fill:'var(--text-muted)', fontSize:10 }} axisLine={false} tickLine={false} interval={3} />
          <YAxis hide />
          <Tooltip content={<Tip />} />
          <Area type="monotone" dataKey="revenue" stroke="#E8C547" strokeWidth={2} fill="url(#gMrr)" dot={false} animationDuration={1300} />
          <Area type="monotone" dataKey="newCustomers" stroke="#2EC4B6" strokeWidth={1.5} fill="url(#gNew)" dot={false} animationDuration={1500} />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
