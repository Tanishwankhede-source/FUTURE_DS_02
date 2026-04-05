import { useState } from 'react'
import { motion } from 'framer-motion'
import { COHORT_DATA } from '../../data/dataset'
import { Grid } from 'lucide-react'

const COLS = ['M0','M1','M2','M3','M4','M5','M6','M7','M8','M9','M10','M11']
const KEYS = ['m0','m1','m2','m3','m4','m5','m6','m7','m8','m9','m10','m11']

function cellStyle(v) {
  if (v == null) return { bg:'rgba(255,255,255,0.02)', txt:'transparent' }
  if (v >= 90)   return { bg:'rgba(82,183,136,0.72)',  txt:'#fff' }
  if (v >= 80)   return { bg:'rgba(82,183,136,0.50)',  txt:'#fff' }
  if (v >= 70)   return { bg:'rgba(193,18,31,0.50)',   txt:'#fff' }
  if (v >= 60)   return { bg:'rgba(193,18,31,0.32)',   txt:'#FFB3B3' }
  if (v >= 50)   return { bg:'rgba(232,197,71,0.32)',  txt:'#FDE68A' }
  return           { bg:'rgba(230,57,70,0.22)',   txt:'#FCA5A5' }
}

export default function CohortHeatmap({ highlighted }) {
  const [hov, setHov] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45 }}
      className={`glass-card rounded-2xl p-5 transition-all duration-400 ${highlighted ? 'story-highlight' : ''}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Grid size={15} style={{ color:'#C1121F' }} />
          <h3 className="font-display font-bold text-base" style={{ color:'var(--text-primary)' }}>Cohort Retention</h3>
        </div>
        <div className="flex items-center gap-2 text-xs" style={{ color:'var(--text-muted)' }}>
          <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm" style={{ background:'rgba(230,57,70,0.30)' }} />Low</span>
          <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm" style={{ background:'rgba(193,18,31,0.45)' }} />Mid</span>
          <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm" style={{ background:'rgba(82,183,136,0.60)' }} />High</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-separate" style={{ borderSpacing: 2 }}>
          <thead>
            <tr>
              <th className="text-left pb-2 pr-3 font-medium" style={{ color:'var(--text-muted)', minWidth:50 }}>Cohort</th>
              {COLS.map(c => (
                <th key={c} className="pb-2 text-center font-mono font-medium" style={{ color:'var(--text-muted)', minWidth:34 }}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COHORT_DATA.map((row, ri) => (
              <tr key={row.cohort}>
                <td className="pr-3 py-0.5 font-medium" style={{ color:'var(--text-secondary)' }}>{row.cohort}</td>
                {KEYS.map((k, ci) => {
                  const v = row[k]
                  const { bg, txt } = cellStyle(v)
                  return (
                    <td key={k} className="py-0.5">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        onMouseEnter={() => setHov({ r: ri, c: ci, v, cohort: row.cohort })}
                        onMouseLeave={() => setHov(null)}
                        initial={{ opacity:0, scale:0.7 }}
                        animate={{ opacity:1, scale:1 }}
                        transition={{ delay: ri*0.025 + ci*0.015 }}
                        className="flex items-center justify-center rounded-md cursor-default"
                        style={{ background:bg, width:'100%', height:30, border: hov?.r===ri && hov?.c===ci ? '1.5px solid rgba(255,255,255,0.35)' : '1.5px solid transparent' }}
                      >
                        {v != null && (
                          <span style={{ color:txt, fontFamily:'JetBrains Mono,monospace', fontSize:9 }}>{v}</span>
                        )}
                      </motion.div>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {hov && hov.v != null && (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="mt-3 px-3 py-2 rounded-xl text-xs glass-card">
          <span style={{ color:'var(--text-secondary)' }}>{hov.cohort} cohort · Month {hov.c}:</span>
          <span className="ml-2 font-bold" style={{ color: hov.v >= 80 ? '#52B788' : hov.v >= 65 ? '#C1121F' : '#E63946' }}>
            {hov.v}% retained
          </span>
        </motion.div>
      )}
      <p className="text-xs mt-3" style={{ color:'var(--text-muted)' }}>
        Rows = signup cohort · Columns = months since signup · Values = % still active
      </p>
    </motion.div>
  )
}
