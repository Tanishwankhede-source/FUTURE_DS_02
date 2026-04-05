import { motion, AnimatePresence } from 'framer-motion'
import { SMART_INSIGHTS } from '../../data/dataset'
import { X, ChevronLeft, ChevronRight, Zap, CheckCircle } from 'lucide-react'

export default function StoryMode({ isOpen, onClose, step, onNext, onPrev }) {
  if (!isOpen) return null
  const ins = SMART_INSIGHTS[step - 1]
  const isLast = step === SMART_INSIGHTS.length

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{ background:'rgba(0,0,0,0.55)', backdropFilter:'blur(4px)' }}
          />
          <motion.div
            initial={{ opacity:0, y:70 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:70 }}
            transition={{ type:'spring', stiffness:280, damping:28 }}
            className="fixed bottom-0 left-0 right-0 md:bottom-6 md:right-6 md:left-auto md:w-[410px] z-50 p-1"
          >
            <div className="rounded-2xl overflow-hidden"
              style={{ background:'rgba(13,10,11,0.97)', border:'1px solid rgba(193,18,31,0.32)', boxShadow:'0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(193,18,31,0.12)' }}>
              {/* Top */}
              <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor:'rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:'rgba(193,18,31,0.18)' }}>
                    <Zap size={13} style={{ color:'#FFB3B3' }} />
                  </div>
                  <span className="font-display font-bold text-sm" style={{ color:'var(--text-primary)' }}>Story Mode</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background:'rgba(193,18,31,0.18)', color:'#FFB3B3' }}>
                    {step}/{SMART_INSIGHTS.length}
                  </span>
                </div>
                <button onClick={onClose} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors" style={{ color:'var(--text-secondary)' }}>
                  <X size={14} />
                </button>
              </div>
              {/* Progress */}
              <div className="flex gap-1.5 px-5 pt-4">
                {SMART_INSIGHTS.map((_, i) => (
                  <div key={i} className="h-1 rounded-full flex-1 transition-all duration-500"
                    style={{ background: i < step ? '#C1121F' : 'rgba(255,255,255,0.10)', transform: i === step-1 ? 'scaleY(1.5)' : 'scaleY(1)' }} />
                ))}
              </div>
              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity:0, x:28 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-28 }}
                  transition={{ duration:0.28 }}
                  className="px-5 py-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background:`${ins.color}20`, color:ins.color }}>
                      {ins.category}
                    </span>
                    <span className="text-xs" style={{ color:'var(--text-muted)' }}>Insight {step} of {SMART_INSIGHTS.length}</span>
                  </div>
                  <h2 className="font-display font-extrabold text-xl mb-3 leading-snug" style={{ color:'var(--text-primary)' }}>
                    {ins.title}
                  </h2>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-xl mb-4 text-sm font-bold"
                    style={{ background:`${ins.color}15`, color:ins.color, border:`1px solid ${ins.color}30` }}>
                    {ins.metric}
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color:'var(--text-secondary)' }}>{ins.detail}</p>
                  <div className="rounded-xl p-3.5" style={{ background:'rgba(193,18,31,0.08)', border:'1px solid rgba(193,18,31,0.22)' }}>
                    <p className="text-xs font-bold mb-1 uppercase tracking-wider" style={{ color:'#FFB3B3' }}>Recommended Action</p>
                    <p className="text-sm font-medium" style={{ color:'var(--text-primary)' }}>{ins.action}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* Nav */}
              <div className="flex items-center gap-3 px-5 pb-5">
                <motion.button
                  whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
                  onClick={onPrev} disabled={step === 1}
                  className="btn btn-ghost" style={{ padding:'9px 14px', fontSize:12 }}
                >
                  <ChevronLeft size={14} /> Prev
                </motion.button>
                <motion.button
                  whileHover={{ scale:1.02, y:-1 }} whileTap={{ scale:0.98 }}
                  onClick={isLast ? onClose : onNext}
                  className="btn btn-primary flex-1" style={{ padding:'10px', fontSize:13 }}
                >
                  {isLast ? <><CheckCircle size={14} /> Done</> : <>Next <ChevronRight size={14} /></>}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
