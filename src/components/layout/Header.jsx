import { motion } from 'framer-motion'
import {
  Sun, Moon, Download, Zap,
  LayoutDashboard, TrendingUp, PieChart, Target, MessageSquare,
} from 'lucide-react'

const TABS = [
  { id: 'overview',        label: 'Overview',      Icon: LayoutDashboard },
  { id: 'retention',       label: 'Retention',     Icon: TrendingUp },
  { id: 'segments',        label: 'Segments',      Icon: PieChart },
  { id: 'actions',         label: 'Actions',       Icon: Target },
  { id: 'ai',              label: 'AI Assistant',  Icon: MessageSquare },
]

export default function Header({ theme, onToggleTheme, onStory, activeTab, setTab }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 px-5 pt-5 pb-0"
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between mb-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg,#C1121F,#E63946)',
              boxShadow: '0 4px 20px rgba(193,18,31,0.45)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 17 L8 10 L12 13.5 L17.5 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="17.5" cy="6" r="2.3" fill="#E8C547" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display font-extrabold text-xl leading-none" style={{ color: 'var(--text-primary)' }}>
                Churn<span style={{ color: '#E63946' }}>Vision</span>
              </h1>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-md"
                style={{ background: 'rgba(232,197,71,0.18)', color: '#E8C547', letterSpacing: '0.06em' }}
              >
                PRO
              </span>
            </div>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
              Customer Intelligence Platform
            </p>
          </div>
        </div>

        {/* Status pill */}
        <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-full glass-card">
          <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot inline-block" />
            Live · Dec 2024
          </span>
          <span className="w-px h-3" style={{ background: 'var(--glass-border)' }} />
          <span className="text-xs font-bold" style={{ color: '#FFB3B3' }}>12,847 customers</span>
          <span className="w-px h-3" style={{ background: 'var(--glass-border)' }} />
          <span className="text-xs font-semibold" style={{ color: '#52B788' }}>94.8% retained</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={onStory}
            className="btn btn-primary hidden sm:flex"
            style={{ padding: '8px 16px', fontSize: 12 }}
          >
            <Zap size={13} />
            Explain Insights
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="btn btn-ghost"
            style={{ padding: '8px 13px', fontSize: 12 }}
            title="Export dashboard"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Export</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={onToggleTheme}
            className="btn btn-ghost"
            style={{ padding: '9px 12px' }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </motion.button>
        </div>
      </div>

      {/* ── Tab bar ── */}
      <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        {TABS.map((tab, i) => (
          <motion.button
            key={tab.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + i * 0.06 }}
            onClick={() => setTab(tab.id)}
            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
          >
            <tab.Icon size={14} />
            {tab.label}
            {tab.id === 'ai' && (
              <span
                className="w-1.5 h-1.5 rounded-full pulse-dot inline-block"
                style={{ background: '#2EC4B6' }}
              />
            )}
          </motion.button>
        ))}
        <div className="flex-1" />
        <span
          className="hidden md:inline-flex items-center text-xs px-3 py-1 rounded-full"
          style={{
            background: 'rgba(193,18,31,0.10)',
            color: '#FFB3B3',
            border: '1px solid rgba(193,18,31,0.20)',
          }}
        >
          FY 2024 · Q4
        </span>
      </div>

      {/* Divider */}
      <div className="mt-3 h-px" style={{ background: 'var(--glass-border)' }} />
    </motion.header>
  )
}
