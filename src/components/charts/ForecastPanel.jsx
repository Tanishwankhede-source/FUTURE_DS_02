import { motion } from 'framer-motion'
import { ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { FORECAST_DATA } from '../../data/dataset'
import { Cpu } from 'lucide-react'

function Tip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  const isForecast = !payload.find(p => p.dataKey === 'actual')?.value
  return (
    <div style={{ background:'rgba(13,10,11,0.96)', border:`1px solid ${isForecast ? 'rgba(232,197,71,0.3)' : 'rgba(193,18,31,0.3)'}`, borderRadius:12, padding:'10px 14px' }}>
      <p className="font-semibold text-xs mb-1" style={{ color:'var(--text-primary)' }}>{label} 2024/25</p>
      {payload.find(p => p.dataKey === 'actual')?.value && (
        <p className="text-xs" style={{ color:'#C1121F' }}>Actual: <strong>{payload.find(p=>p.dataKey==='actual').value}%</strong></p>
      )}
      {payload.find(p => p.dataKey === 'forecast')?.value && (
        <p className="text-xs" style={{ color:'#E8C547' }}>Forecast: <strong>{payload.find(p=>p.dataKey==='forecast').value}%</strong></p>
      )}
      {isForecast && <p className="text-xs mt-1 italic" style={{ color:'#E8C547', opacity:0.6 }}>AI Prediction</p>}
    </div>
  )
}

export default function ForecastPanel({ highlighted }) {
  return (
    <motion.div
      initial={{ opacity:0, y:18 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay:0.55 }}
      className={`glass-card rounded-2xl p-5 transition-all duration-400 ${highlighted ? 'story-highlight' : ''}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background:'rgba(232,197,71,0.15)' }}>
            <Cpu size={14} style={{ color:'#E8C547' }} />
          </div>
          <div>
            <h3 className="font-display font-bold text-base" style={{ color:'var(--text-primary)' }}>AI Forecast</h3>
            <p className="text-xs" style={{ color:'var(--text-muted)' }}>6-month retention prediction</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-display font-bold text-base" style={{ color:'#E8C547' }}>96.2%</p>
          <p className="text-xs" style={{ color:'var(--text-muted)' }}>Jun 25 target</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={175}>
        <ComposedChart data={FORECAST_DATA} margin={{ top:5, right:5, bottom:0, left:-22 }}>
          <defs>
            <linearGradient id="gConf" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E8C547" stopOpacity={0.14} />
              <stop offset="95%" stopColor="#E8C547" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
          <XAxis dataKey="month" tick={{ fill:'var(--text-muted)', fontSize:10 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill:'var(--text-muted)', fontSize:10 }} axisLine={false} tickLine={false} domain={[93,98]} tickFormatter={v=>`${v}%`} />
          <Tooltip content={<Tip />} />
          <ReferenceLine x="Dec" stroke="rgba(255,255,255,0.12)" strokeDasharray="4 4" />
          <Area dataKey="hi"   fill="url(#gConf)" stroke="transparent" connectNulls animationDuration={1400} />
          <Area dataKey="lo"   fill="white" fillOpacity={0} stroke="transparent" connectNulls animationDuration={1400} />
          <Line type="monotone" dataKey="actual"   stroke="#C1121F" strokeWidth={2.5} dot={false} connectNulls={false} animationDuration={1200} />
          <Line type="monotone" dataKey="forecast" stroke="#E8C547" strokeWidth={2} strokeDasharray="5 3" dot={false} connectNulls animationDuration={1400} />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-4 mt-3 text-xs" style={{ color:'var(--text-muted)' }}>
        <span className="flex items-center gap-1.5"><span className="w-5 h-0.5 rounded" style={{ background:'#C1121F', display:'inline-block' }} />Actual</span>
        <span className="flex items-center gap-1.5"><span className="w-5 h-0.5 rounded" style={{ background:'#E8C547', display:'inline-block', borderTop:'2px dashed #E8C547' }} />Forecast</span>
        <span className="flex items-center gap-1.5"><span className="w-4 h-3 rounded-sm inline-block" style={{ background:'rgba(232,197,71,0.15)' }} />Confidence</span>
      </div>
    </motion.div>
  )
}
