import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { CHURN_BY_PLAN, CHURN_BY_REGION, CHURN_BY_TENURE } from '../../data/dataset'
import { BarChart2 } from 'lucide-react'

const TABS = [
  { id: 'plan',   label: 'By Plan',   data: CHURN_BY_PLAN },
  { id: 'region', label: 'By Region', data: CHURN_BY_REGION },
  { id: 'tenure', label: 'By Tenure', data: CHURN_BY_TENURE },
]

function Tip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  const d = payload[0]
  return (
    <div style={{ background:'rgba(13,10,11,0.96)', border:`1px solid ${d.payload.color}40`, borderRadius:12, padding:'10px 14px', boxShadow:'0 16px 40px rgba(0,0,0,0.4)' }}>
      <p className="font-semibold text-sm mb-2" style={{ color:'var(--text-primary)' }}>{label}</p>
      <div className="flex items-center gap-2 text-xs">
        <span className="w-2 h-2 rounded-full" style={{ background: d.payload.color }} />
        <span style={{ color:'var(--text-secondary)' }}>Churn Rate:</span>
        <span className="font-bold" style={{ color: d.payload.color }}>{d.value}%</span>
      </div>
      <div className="flex items-center gap-2 text-xs mt-1">
        <span className="w-2 h-2 rounded-full bg-gray-500" />
        <span style={{ color:'var(--text-secondary)' }}>Customers:</span>
        <span className="font-medium" style={{ color:'var(--text-primary)' }}>{d.payload.customers?.toLocaleString()}</span>
      </div>
    </div>
  )
}

export default function ChurnSegmentChart({ highlighted, activeSegment }) {
  const [tab, setTab] = useState(activeSegment || 'plan')
  const current = TABS.find(t => t.id === tab) || TABS[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className={`glass-card rounded-2xl p-5 transition-all duration-400 ${highlighted ? 'story-highlight' : ''}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart2 size={15} style={{ color:'#C1121F' }} />
          <h3 className="font-display font-bold text-base" style={{ color:'var(--text-primary)' }}>Churn by Segment</h3>
        </div>
        <div className="flex gap-1 p-1 rounded-xl" style={{ background:'var(--bg-surface)' }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-250"
              style={tab === t.id
                ? { background:'#C1121F', color:'#fff', boxShadow:'0 2px 10px rgba(193,18,31,0.4)' }
                : { color:'var(--text-secondary)' }
              }
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={235}>
        <BarChart data={current.data} margin={{ top:5, right:5, bottom:0, left:-15 }} barSize={28}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
          <XAxis dataKey="segment" tick={{ fill:'var(--text-muted)', fontSize:10 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill:'var(--text-muted)', fontSize:11 }} axisLine={false} tickLine={false} tickFormatter={v=>`${v}%`} />
          <Tooltip content={<Tip />} cursor={{ fill:'rgba(193,18,31,0.06)', radius:6 }} />
          <Bar dataKey="churnRate" radius={[6,6,0,0]} animationDuration={1100}>
            {current.data.map((e, i) => <Cell key={i} fill={e.color} fillOpacity={0.88} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
