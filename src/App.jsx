import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import AnimatedBackground from './components/layout/AnimatedBackground'
import Header from './components/layout/Header'
import LoadingSkeleton from './components/ui/LoadingSkeleton'
import ActivityFeed from './components/ui/ActivityFeed'
import AIAssistant from './components/ui/AIAssistant'
import KPISection from './components/kpi/KPISection'
import FilterPanel from './components/filters/FilterPanel'
import RetentionChart from './components/charts/RetentionChart'
import ChurnSegmentChart from './components/charts/ChurnSegmentChart'
import CustomerPieChart from './components/charts/CustomerPieChart'
import CohortHeatmap from './components/charts/CohortHeatmap'
import ChurnReasonsChart from './components/charts/ChurnReasonsChart'
import RevenueTrendChart from './components/charts/RevenueTrendChart'
import CustomerHealthPanel from './components/charts/CustomerHealthPanel'
import ForecastPanel from './components/charts/ForecastPanel'
import InsightsPanel from './components/insights/InsightsPanel'
import StoryMode from './components/insights/StoryMode'
import RecommendationsPanel from './components/insights/RecommendationsPanel'
import { useTheme } from './hooks/useTheme'

const STORY_MAP = { 1:'tenure', 2:'plan', 3:'retention', 4:'region', 5:'reasons' }

const page = {
  initial: { opacity:0, y:16 },
  animate: { opacity:1, y:0, transition:{ duration:0.42, ease:[0.16,1,0.3,1] } },
  exit:    { opacity:0, y:-10, transition:{ duration:0.22 } },
}

export default function App() {
  const { theme, toggle } = useTheme()
  const [loading, setLoading]         = useState(true)
  const [tab, setTab]                 = useState('overview')
  const [filters, setFilters]         = useState({ plan:'All Plans', region:'All Regions', tenure:'All Tenures' })
  const [storyOpen, setStoryOpen]     = useState(false)
  const [storyStep, setStoryStep]     = useState(1)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1700)
    return () => clearTimeout(t)
  }, [])

  const hl = storyOpen ? STORY_MAP[storyStep] : null

  return (
    <div id="cv-root" className="min-h-screen relative" style={{ background:'var(--bg-primary)' }}>
      <AnimatedBackground />
      <div className="noise-bg" />

      <div className="relative z-10 max-w-[1700px] mx-auto">
        <Header
          theme={theme}
          onToggleTheme={toggle}
          onStory={() => { setStoryStep(1); setStoryOpen(true) }}
          activeTab={tab}
          setTab={setTab}
        />

        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingSkeleton key="sk" />
          ) : (
            <div key="main" className="px-4 md:px-5 pt-5 pb-14">
              <AnimatePresence mode="wait">

                {/* ═══════════ OVERVIEW ═══════════ */}
                {tab === 'overview' && (
                  <motion.div key="ov" variants={page} initial="initial" animate="animate" exit="exit" className="space-y-5">
                    <KPISection />
                    <FilterPanel filters={filters} setFilters={setFilters} />
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                      <div className="xl:col-span-2">
                        <RetentionChart highlighted={hl==='retention'} />
                      </div>
                      <CustomerPieChart highlighted={hl==='plan'} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                      <ChurnReasonsChart highlighted={hl==='reasons'} />
                      <RevenueTrendChart />
                      <ActivityFeed />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      <InsightsPanel storyStep={storyStep} isStoryActive={storyOpen} />
                      <ForecastPanel />
                    </div>
                  </motion.div>
                )}

                {/* ═══════════ RETENTION ═══════════ */}
                {tab === 'retention' && (
                  <motion.div key="ret" variants={page} initial="initial" animate="animate" exit="exit" className="space-y-5">
                    <KPISection />
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                      <div className="xl:col-span-2"><RetentionChart highlighted={false} /></div>
                      <ForecastPanel highlighted={false} />
                    </div>
                    <CohortHeatmap highlighted={false} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      <CustomerHealthPanel />
                      <InsightsPanel storyStep={storyStep} isStoryActive={storyOpen} />
                    </div>
                  </motion.div>
                )}

                {/* ═══════════ SEGMENTS ═══════════ */}
                {tab === 'segments' && (
                  <motion.div key="seg" variants={page} initial="initial" animate="animate" exit="exit" className="space-y-5">
                    <FilterPanel filters={filters} setFilters={setFilters} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      <ChurnSegmentChart
                        highlighted={['tenure','region','plan'].includes(hl)}
                        activeSegment={hl==='tenure'?'tenure':hl==='region'?'region':'plan'}
                      />
                      <CustomerPieChart highlighted={false} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                      <ChurnReasonsChart highlighted={hl==='reasons'} />
                      <RevenueTrendChart />
                      <CustomerHealthPanel />
                    </div>
                    <CohortHeatmap highlighted={false} />
                  </motion.div>
                )}

                {/* ═══════════ ACTIONS ═══════════ */}
                {tab === 'actions' && (
                  <motion.div key="act" variants={page} initial="initial" animate="animate" exit="exit" className="space-y-5">
                    <KPISection />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                      <div className="lg:col-span-2">
                        <RecommendationsPanel />
                      </div>
                      <InsightsPanel storyStep={storyStep} isStoryActive={storyOpen} />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      <ForecastPanel highlighted={false} />
                      <ActivityFeed />
                    </div>
                  </motion.div>
                )}

                {/* ═══════════ AI ASSISTANT ═══════════ */}
                {tab === 'ai' && (
                  <motion.div key="ai" variants={page} initial="initial" animate="animate" exit="exit">
                    <AIAssistant />
                  </motion.div>
                )}

              </AnimatePresence>

              {/* ── Footer ── */}
              <motion.footer
                initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.1 }}
                className="mt-12 pt-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
                style={{ borderColor:'var(--glass-border)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-lg flex items-center justify-center"
                    style={{ background:'linear-gradient(135deg,#C1121F,#E63946)' }}>
                    <svg width="11" height="11" viewBox="0 0 20 20" fill="none">
                      <path d="M3 15 L8 9 L12 12.5 L17 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs font-semibold" style={{ color:'var(--text-secondary)' }}>ChurnVision PRO</span>
                  <span className="text-xs" style={{ color:'var(--text-muted)' }}>· Customer Intelligence Platform</span>
                </div>

                <p className="text-xs font-medium" style={{ color:'var(--text-muted)' }}>
                  Made with <span style={{ color:'#E63946' }}>♥</span> by{' '}
                  <span className="font-semibold" style={{ color:'var(--text-secondary)' }}>Tanish Wankhede</span>
                  {' '}· Future Interns Data Science 2026
                </p>

                <div className="flex items-center gap-2 text-xs" style={{ color:'var(--text-muted)' }}>
                  <span>React 18</span>
                  <span style={{ color:'var(--glass-border)' }}>·</span>
                  <span>Recharts</span>
                  <span style={{ color:'var(--glass-border)' }}>·</span>
                  <span>Framer Motion</span>
                </div>
              </motion.footer>
            </div>
          )}
        </AnimatePresence>
      </div>

      <StoryMode
        isOpen={storyOpen}
        onClose={() => setStoryOpen(false)}
        step={storyStep}
        onNext={() => setStoryStep(s => Math.min(s+1, 5))}
        onPrev={() => setStoryStep(s => Math.max(s-1, 1))}
      />
    </div>
  )
}
