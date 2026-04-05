import { motion } from 'framer-motion'

const S = ({ className = '' }) => <div className={`skeleton rounded-xl ${className}`} />

export default function LoadingSkeleton() {
  return (
    <motion.div
      initial={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.35 }}
      className="px-5 pb-10 pt-5 space-y-5"
    >
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {[...Array(5)].map((_,i) => (
          <div key={i} className="glass-card rounded-2xl p-5 space-y-3">
            <div className="flex justify-between"><S className="w-10 h-10" /><S className="w-14 h-5" /></div>
            <S className="w-20 h-8" /><S className="w-32 h-3" />
          </div>
        ))}
      </div>
      <div className="glass-card rounded-2xl p-4">
        <div className="flex gap-4">{[...Array(3)].map((_,i) => <div key={i} className="flex-1 space-y-2"><S className="h-3 w-16" /><S className="h-10" /></div>)}</div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2 glass-card rounded-2xl p-5 space-y-3"><S className="h-5 w-40" /><S className="h-64" /></div>
        <div className="glass-card rounded-2xl p-5 space-y-3"><S className="h-5 w-32" /><S className="h-48 w-48 rounded-full mx-auto" /></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(3)].map((_,i) => (
          <div key={i} className="glass-card rounded-2xl p-5 space-y-3"><S className="h-5 w-36" /><S className="h-44" /></div>
        ))}
      </div>
    </motion.div>
  )
}
