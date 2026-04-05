import { motion } from 'framer-motion'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { HEALTH_RADAR } from '../../data/dataset'
import { Activity } from 'lucide-react'

const SEGMENTS = [
  { label:'Healthy',  pct:58, count:7451,  color:'#52B788' },
  { label:'At Risk',  pct:27, count:3469,  color:'#E8C547' },
  { label:'Critical', pct:15, count:1927,  color:'#E63946' },
]

function Tip({ active, payload }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background:'rgba(13,10,11,0.96)', border:'1px solid rgba(193,18,31,0.30)', borderRadius:12, padding:'10px 14px' }}>
      <p className="font-bold text-xs" style={{ color:'var(--text-primary)' }}>{payload[0]?.payload?.metric}</p>
      <p className="text-xs" style={{ color:'#C1121F' }}>Score: <strong>{payload[0]?.value}</strong>/100</p>
    </div>
  )
}

export default function CustomerHealthPanel() {
  const avg = Math.round(HEALTH_RADAR.reduce((s, d) => s + d.score, 0) / HEALTH_RADAR.length)
  return (
    <motion.div
      initial={{ opacity:0, y:18 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay:0.58 }}
      className="glass-card rounded-2xl p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <Activity size={15} style={{ color:'#52B788' }} />
        <h3 className="font-display font-bold text-base" style={{ color:'var(--text-primary)' }}>Health Score</h3>
        <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ background:'rgba(193,18,31,0.12)', color:'#FFB3B3' }}>Predictive</span>
      </div>
      <div className="flex items-center gap-3">
        <div style={{ width:160, height:160, flexShrink:0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={HEALTH_RADAR}>
              <PolarGrid stroke="rgba(255,255,255,0.06)" />
              <PolarAngleAxis dataKey="metric" tick={{ fill:'var(--text-muted)', fontSize:9 }} />
              <Radar name="Health" dataKey="score" stroke="#C1121F" fill="#C1121F" fillOpacity={0.18} strokeWidth={1.5} animationDuration={1200} />
              <Tooltip content={<Tip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 space-y-2">
          <div className="text-center mb-3">
            <p className="font-display font-extrabold text-4xl" style={{ color: avg>70?'#52B788':avg>55?'#E8C547':'#E63946' }}>{avg}</p>
            <p className="text-xs" style={{ color:'var(--text-muted)' }}>Overall Score</p>
          </div>
          {SEGMENTS.map(s => (
            <div key={s.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-semibold" style={{ color:s.color }}>{s.label}</span>
                <span style={{ color:'var(--text-muted)' }}>{s.count.toLocaleString()}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background:'rgba(255,255,255,0.06)' }}>
                <motion.div
                  initial={{ width:0 }} animate={{ width:`${s.pct}%` }}
                  transition={{ delay:0.8, duration:0.75 }}
                  className="h-full rounded-full" style={{ background:s.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
