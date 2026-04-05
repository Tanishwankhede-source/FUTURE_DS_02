import { motion } from 'framer-motion'
import { SlidersHorizontal, X } from 'lucide-react'

const PLANS   = ['All Plans',   'Free','Starter','Pro','Business','Enterprise']
const REGIONS = ['All Regions', 'N. America','Europe','Asia Pacific','LATAM','Middle East']
const TENURES = ['All Tenures', '0–3 mo','3–6 mo','6–12 mo','1–2 yr','2+ yr']

function Select({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
        {label}
      </label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--glass-border)',
          color: 'var(--text-primary)',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 13,
          padding: '9px 32px 9px 12px',
          borderRadius: 12,
          outline: 'none',
          cursor: 'pointer',
          appearance: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C1121F' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 10px center',
          transition: 'border-color 0.25s',
        }}
        onFocus={e => (e.target.style.borderColor = 'rgba(193,18,31,0.5)')}
        onBlur={e => (e.target.style.borderColor = 'var(--glass-border)')}
      >
        {options.map(o => (
          <option key={o} value={o} style={{ background: '#1A1114' }}>{o}</option>
        ))}
      </select>
    </div>
  )
}

const DEFAULT = { plan: 'All Plans', region: 'All Regions', tenure: 'All Tenures' }

export default function FilterPanel({ filters, setFilters }) {
  const active = filters.plan !== DEFAULT.plan || filters.region !== DEFAULT.region || filters.tenure !== DEFAULT.tenure

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card rounded-2xl p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={14} style={{ color: '#E63946' }} />
          <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Filters</span>
          {active && (
            <span className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: 'rgba(193,18,31,0.15)', color: '#FFB3B3' }}>
              Active
            </span>
          )}
        </div>
        {active && (
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => setFilters(DEFAULT)}
            className="flex items-center gap-1 text-xs font-medium"
            style={{ color: '#E63946' }}
          >
            <X size={11} /> Reset
          </motion.button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Select label="Plan Type"  value={filters.plan}   onChange={v => setFilters(f => ({ ...f, plan: v }))}   options={PLANS}   />
        <Select label="Region"     value={filters.region} onChange={v => setFilters(f => ({ ...f, region: v }))} options={REGIONS} />
        <Select label="Tenure"     value={filters.tenure} onChange={v => setFilters(f => ({ ...f, tenure: v }))} options={TENURES} />
      </div>
    </motion.div>
  )
}
