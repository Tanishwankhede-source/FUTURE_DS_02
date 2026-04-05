import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Bot, Sparkles, RotateCcw, ChevronRight } from 'lucide-react'
import { AI_KNOWLEDGE } from '../../data/dataset'

const SUGGESTIONS = [
  'What is our current churn rate?',
  'Why are customers leaving?',
  'Which plan retains best?',
  'What actions should we take?',
  'Explain the LATAM situation',
  'Show me the cohort insights',
  'What does the AI forecast say?',
  'How is customer health trending?',
]

function getAnswer(q) {
  const lower = q.toLowerCase()
  for (const item of AI_KNOWLEDGE) {
    if (item.keys.some(k => lower.includes(k))) return item.answer
  }
  return `Great question! Here's a quick snapshot of your Dec 2024 data:\n\n• **Churn Rate:** 5.2% (↓ from 8.8% in Jan 2024)\n• **Retention:** 94.8% (+3.6pp YoY)\n• **MRR:** $284,750 (+8.4% MoM)\n• **Biggest risk:** 0–3 month customers churning at 22.1%\n• **Top opportunity:** +$101K MRR from 5 recommended actions\n\nTry asking about specific topics like churn rates, revenue, plans, LATAM, cohorts, forecasts, or recommendations!`
}

function renderMd(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>')
    .replace(/• /g, '&nbsp;&nbsp;• ')
}

const INIT_MSG = {
  role: 'ai',
  text: `👋 Hi! I'm **ChurnVision AI** — your intelligent retention analyst.\n\nI have full context on your Dec 2024 data: churn rates, cohorts, segments, revenue, forecasts, and recommendations.\n\nAsk me anything, or pick a quick question below!`,
  time: new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' }),
}

export default function AIAssistant() {
  const [msgs, setMsgs] = useState([INIT_MSG])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:'smooth' }) }, [msgs, typing])

  const send = (q) => {
    const text = q || input.trim()
    if (!text) return
    const now = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })
    setMsgs(m => [...m, { role:'user', text, time:now }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs(m => [...m, { role:'ai', text: getAnswer(text), time: new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' }) }])
    }, 900 + Math.random() * 700)
  }

  const reset = () => setMsgs([{ ...INIT_MSG, time: new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' }) }])

  return (
    <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.45 }} className="space-y-4">
      {/* Header card */}
      <div className="glass-card rounded-2xl p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center spin-slow"
            style={{ background:'linear-gradient(135deg,#C1121F,#E63946)', boxShadow:'0 4px 20px rgba(193,18,31,0.42)' }}>
            <Bot size={22} className="text-white" style={{ animation:'none' }} />
          </div>
          <div>
            <h2 className="font-display font-extrabold text-lg" style={{ color:'var(--text-primary)' }}>
              ChurnVision <span style={{ color:'#E8C547' }}>AI</span>
            </h2>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot inline-block" />
              <span className="text-xs" style={{ color:'var(--text-secondary)' }}>Online · Trained on Dec 2024 data</span>
            </div>
          </div>
        </div>
        <motion.button whileHover={{ scale:1.04 }} whileTap={{ scale:0.96 }} onClick={reset}
          className="btn btn-ghost" style={{ padding:'8px 14px', fontSize:12 }}>
          <RotateCcw size={12} /> Reset
        </motion.button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Chat */}
        <div className="flex-1 glass-card rounded-2xl overflow-hidden flex flex-col" style={{ minHeight:520 }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4" style={{ maxHeight:430 }}>
            <AnimatePresence initial={false}>
              {msgs.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity:0, y:10, scale:0.97 }}
                  animate={{ opacity:1, y:0, scale:1 }}
                  transition={{ duration:0.32, ease:[0.16,1,0.3,1] }}
                  className={`flex ${msg.role==='user'?'justify-end':'justify-start'} items-end gap-2`}
                >
                  {msg.role === 'ai' && (
                    <div className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center mb-1"
                      style={{ background:'linear-gradient(135deg,#C1121F,#E63946)' }}>
                      <Sparkles size={12} className="text-white" />
                    </div>
                  )}
                  <div className="flex flex-col gap-1" style={{ alignItems: msg.role==='user'?'flex-end':'flex-start', maxWidth:'86%' }}>
                    <div
                      className={msg.role==='user' ? 'bubble-user' : 'bubble-ai'}
                      dangerouslySetInnerHTML={{ __html: renderMd(msg.text) }}
                    />
                    <span className="text-xs px-1" style={{ color:'var(--text-muted)' }}>{msg.time}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {typing && (
              <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center"
                  style={{ background:'linear-gradient(135deg,#C1121F,#E63946)' }}>
                  <Sparkles size={12} className="text-white" />
                </div>
                <div className="bubble-ai flex items-center gap-1.5 py-3">
                  {[0,1,2].map(i => (
                    <span key={i} className="typing-dot w-1.5 h-1.5 rounded-full inline-block"
                      style={{ background:'var(--text-secondary)', display:'inline-block' }} />
                  ))}
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} />
          </div>
          {/* Input */}
          <div className="p-3 border-t" style={{ borderColor:'var(--glass-border)' }}>
            <div className="flex gap-2">
              <input
                type="text" value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
                placeholder="Ask about churn, revenue, segments, forecasts…"
                style={{
                  flex:1, padding:'10px 14px', borderRadius:12, fontSize:13,
                  background:'var(--bg-surface)', border:'1px solid var(--glass-border)',
                  color:'var(--text-primary)', fontFamily:'DM Sans,sans-serif', outline:'none',
                  transition:'border-color 0.25s',
                }}
                onFocus={e => (e.target.style.borderColor='rgba(193,18,31,0.50)')}
                onBlur={e  => (e.target.style.borderColor='var(--glass-border)')}
              />
              <motion.button
                whileHover={{ scale:1.06, y:-1 }} whileTap={{ scale:0.94 }}
                onClick={() => send()} disabled={!input.trim()}
                className="btn btn-primary" style={{ padding:'10px 14px' }}
              >
                <Send size={15} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-56 flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wider px-1 mb-1" style={{ color:'var(--text-muted)' }}>
            Quick Questions
          </p>
          {SUGGESTIONS.map((s, i) => (
            <motion.button
              key={i}
              initial={{ opacity:0, x:12 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.1+i*0.06 }}
              whileHover={{ x:3 }} whileTap={{ scale:0.98 }}
              onClick={() => send(s)}
              className="glass-card rounded-xl px-3 py-2.5 text-left text-xs flex items-center gap-2 group transition-all"
              style={{ color:'var(--text-secondary)' }}
            >
              <ChevronRight size={11} className="flex-shrink-0 transition-colors" style={{ color:'var(--text-muted)' }} />
              {s}
            </motion.button>
          ))}
          <div className="glass-card rounded-xl p-3 mt-2">
            <p className="text-xs font-semibold mb-2" style={{ color:'var(--text-secondary)' }}>I can answer about:</p>
            {['Churn & Retention','Revenue & MRR','Plan Analysis','Regional Data','Cohort Trends','AI Forecasts','Recommendations'].map(c => (
              <div key={c} className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background:'#C1121F' }} />
                <span className="text-xs" style={{ color:'var(--text-muted)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
