import { useState } from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Sector } from 'recharts'
import { CUSTOMER_DIST } from '../../data/dataset'
import { PieChart as PieIcon } from 'lucide-react'

const TOTAL = CUSTOMER_DIST.reduce((s, d) => s + d.value, 0)

function ActiveShape(props) {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props
  return (
    <g>
      <text x={cx} y={cy - 14} textAnchor="middle" fill="var(--text-primary)"
        style={{ fontSize: 22, fontFamily:'Syne,sans-serif', fontWeight:800 }}>
        {payload.value.toLocaleString()}
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill="var(--text-secondary)" style={{ fontSize:11 }}>
        {payload.name}
      </text>
      <text x={cx} y={cy + 28} textAnchor="middle" fill={fill} style={{ fontSize:12, fontWeight:700 }}>
        {(percent * 100).toFixed(1)}%
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius + 8} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} innerRadius={outerRadius + 12} outerRadius={outerRadius + 15} startAngle={startAngle} endAngle={endAngle} fill={fill} opacity={0.45} />
    </g>
  )
}

function Tip({ active, payload }) {
  if (!active || !payload?.length) return null
  const d = payload[0]
  return (
    <div style={{ background:'rgba(13,10,11,0.96)', border:`1px solid ${d.payload.color}40`, borderRadius:12, padding:'10px 14px' }}>
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background:d.payload.color }} />
        <span className="font-semibold text-sm" style={{ color:'var(--text-primary)' }}>{d.name}</span>
      </div>
      <p className="text-xs" style={{ color:'var(--text-secondary)' }}>
        <span className="font-bold" style={{ color:'var(--text-primary)' }}>{d.value.toLocaleString()}</span> customers
      </p>
      <p className="text-xs" style={{ color:'var(--text-secondary)' }}>
        <span className="font-bold" style={{ color:d.payload.color }}>{((d.value/TOTAL)*100).toFixed(1)}%</span> of base
      </p>
    </div>
  )
}

export default function CustomerPieChart({ highlighted }) {
  const [activeIdx, setActiveIdx] = useState(0)
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className={`glass-card rounded-2xl p-5 transition-all duration-400 ${highlighted ? 'story-highlight' : ''}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <PieIcon size={15} style={{ color:'#2EC4B6' }} />
        <h3 className="font-display font-bold text-base" style={{ color:'var(--text-primary)' }}>Customer Mix</h3>
      </div>
      <ResponsiveContainer width="100%" height={210}>
        <PieChart>
          <Pie
            activeIndex={activeIdx}
            activeShape={ActiveShape}
            data={CUSTOMER_DIST}
            cx="50%" cy="50%"
            innerRadius={60} outerRadius={85}
            dataKey="value"
            onMouseEnter={(_, i) => setActiveIdx(i)}
            animationBegin={200} animationDuration={1300}
          >
            {CUSTOMER_DIST.map((e, i) => <Cell key={i} fill={e.color} stroke="transparent" />)}
          </Pie>
          <Tooltip content={<Tip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-1.5 mt-1">
        {CUSTOMER_DIST.map((d, i) => (
          <button key={i} onClick={() => setActiveIdx(i)}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs transition-all"
            style={{ background: activeIdx === i ? 'rgba(255,255,255,0.05)' : 'transparent' }}
          >
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background:d.color }} />
            <span style={{ color:'var(--text-secondary)' }}>{d.name}</span>
            <span className="ml-auto font-mono font-bold" style={{ color:'var(--text-primary)', fontSize:10 }}>
              {((d.value/TOTAL)*100).toFixed(0)}%
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}
