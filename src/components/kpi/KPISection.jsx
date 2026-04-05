import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, Clock, DollarSign, Users, ArrowUp, ArrowDown } from 'lucide-react'
import { useCountUp } from '../../hooks/useCountUp'
import { KPI } from '../../data/dataset'

function Badge({ delta, inverse }) {
  const good = inverse ? delta < 0 : delta > 0
  return (
    <span
      className="inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full"
      style={{
        background: good ? 'rgba(82,183,136,0.16)' : 'rgba(230,57,70,0.16)',
        color: good ? '#52B788' : '#E63946',
      }}
    >
      {good ? <ArrowUp size={9} /> : <ArrowDown size={9} />}
      {Math.abs(delta)}%
    </span>
  )
}

function Card({ label, raw, suffix, prefix, decimals, delta, inverse, Icon, color, glow, desc, delay }) {
  const val = useCountUp(raw, 1700, decimals)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.93 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, scale: 1.025, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
      className={`glass-card rounded-2xl p-5 relative overflow-hidden cursor-default ${glow}`}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle at 15% 15%, ${color}10, transparent 65%)` }}
      />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${color}1C`, border: `1px solid ${color}2E` }}
          >
            <Icon size={18} style={{ color }} />
          </div>
          <Badge delta={delta} inverse={inverse} />
        </div>
        <div className="flex items-baseline gap-0.5">
          {prefix && <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{prefix}</span>}
          <span className="font-display font-extrabold text-3xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
            {val}
          </span>
          {suffix && <span className="text-sm font-medium ml-0.5" style={{ color: 'var(--text-secondary)' }}>{suffix}</span>}
        </div>
        <p className="text-sm font-medium mt-1" style={{ color: 'var(--text-secondary)' }}>{label}</p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{desc}</p>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl"
        style={{ background: `linear-gradient(90deg,transparent,${color}55,transparent)` }}
      />
    </motion.div>
  )
}

export default function KPISection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
      <Card label="Churn Rate"            raw={KPI.churnRate}      suffix="%" decimals={1} delta={KPI.churnDelta}     inverse Icon={AlertTriangle} color="#E63946" glow="glow-red"   desc="Monthly avg · 667 churned"    delay={0}    />
      <Card label="Retention Rate"        raw={KPI.retentionRate}  suffix="%" decimals={1} delta={KPI.retentionDelta}        Icon={TrendingUp}   color="#52B788" glow="glow-green" desc="12-month rolling"             delay={0.07} />
      <Card label="Avg Lifetime"          raw={KPI.avgLifetime}    suffix=" mo" decimals={1} delta={KPI.lifetimeDelta}       Icon={Clock}        color="#E8C547" glow="glow-gold"  desc="Active paying customers"      delay={0.14} />
      <Card label="Monthly Revenue"       raw={284.75} prefix="$" suffix="K" decimals={1} delta={KPI.mrrDelta}              Icon={DollarSign}   color="#2EC4B6" glow="glow-teal"  desc="MRR · +$22K vs last month"    delay={0.21} />
      <Card label="Total Customers"       raw={12.847}             suffix="K" decimals={3} delta={7.2}                      Icon={Users}        color="#C9A87C" glow=""           desc="923 new this month"           delay={0.28} />
    </div>
  )
}
