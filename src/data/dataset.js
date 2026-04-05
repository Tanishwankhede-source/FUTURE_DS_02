export const KPI = {
  churnRate: 5.2,
  retentionRate: 94.8,
  avgLifetime: 18.4,
  mrr: 284750,
  totalCustomers: 12847,
  newThisMonth: 923,
  churned: 667,
  churnDelta: -1.3,
  retentionDelta: 1.3,
  lifetimeDelta: 2.1,
  mrrDelta: 8.4,
}

export const RETENTION_TREND = [
  { month: 'Jan', retention: 91.2, churn: 8.8, newCustomers: 820,  revenue: 241000 },
  { month: 'Feb', retention: 91.8, churn: 8.2, newCustomers: 754,  revenue: 248000 },
  { month: 'Mar', retention: 92.3, churn: 7.7, newCustomers: 891,  revenue: 255000 },
  { month: 'Apr', retention: 92.9, churn: 7.1, newCustomers: 810,  revenue: 259000 },
  { month: 'May', retention: 93.1, churn: 6.9, newCustomers: 876,  revenue: 263000 },
  { month: 'Jun', retention: 93.4, churn: 6.6, newCustomers: 930,  revenue: 268000 },
  { month: 'Jul', retention: 93.7, churn: 6.3, newCustomers: 904,  revenue: 271000 },
  { month: 'Aug', retention: 94.0, churn: 6.0, newCustomers: 918,  revenue: 274000 },
  { month: 'Sep', retention: 94.2, churn: 5.8, newCustomers: 887,  revenue: 277000 },
  { month: 'Oct', retention: 94.5, churn: 5.5, newCustomers: 912,  revenue: 280000 },
  { month: 'Nov', retention: 94.6, churn: 5.4, newCustomers: 908,  revenue: 282000 },
  { month: 'Dec', retention: 94.8, churn: 5.2, newCustomers: 923,  revenue: 284750 },
]

export const CHURN_BY_PLAN = [
  { segment: 'Free',       churnRate: 18.4, customers: 3420, color: '#6B5050' },
  { segment: 'Starter',    churnRate: 9.2,  customers: 2890, color: '#2EC4B6' },
  { segment: 'Pro',        churnRate: 5.8,  customers: 3210, color: '#C1121F' },
  { segment: 'Business',   churnRate: 3.1,  customers: 1980, color: '#E63946' },
  { segment: 'Enterprise', churnRate: 1.4,  customers: 1347, color: '#52B788' },
]

export const CHURN_BY_REGION = [
  { segment: 'N. America',   churnRate: 4.1, customers: 4320, color: '#C1121F' },
  { segment: 'Europe',       churnRate: 4.8, customers: 3190, color: '#52B788' },
  { segment: 'Asia Pacific', churnRate: 7.3, customers: 2870, color: '#E8C547' },
  { segment: 'LATAM',        churnRate: 9.1, customers: 1560, color: '#E63946' },
  { segment: 'Middle East',  churnRate: 6.4, customers: 907,  color: '#2EC4B6' },
]

export const CHURN_BY_TENURE = [
  { segment: '0–3 mo',   churnRate: 22.1, customers: 1890, color: '#E63946' },
  { segment: '3–6 mo',   churnRate: 12.4, customers: 2140, color: '#E8C547' },
  { segment: '6–12 mo',  churnRate: 6.8,  customers: 2780, color: '#C1121F' },
  { segment: '1–2 yr',   churnRate: 3.2,  customers: 3420, color: '#52B788' },
  { segment: '2+ yr',    churnRate: 1.4,  customers: 2617, color: '#2EC4B6' },
]

export const CUSTOMER_DIST = [
  { name: 'Enterprise', value: 1347, color: '#52B788' },
  { name: 'Business',   value: 1980, color: '#C1121F' },
  { name: 'Pro',        value: 3210, color: '#E63946' },
  { name: 'Starter',    value: 2890, color: '#2EC4B6' },
  { name: 'Free',       value: 3420, color: '#6B5050' },
]

export const COHORT_DATA = [
  { cohort:'Jan', m0:100, m1:84, m2:76, m3:71, m4:68, m5:65, m6:63, m7:61, m8:60, m9:59, m10:58, m11:57 },
  { cohort:'Feb', m0:100, m1:83, m2:75, m3:70, m4:67, m5:64, m6:62, m7:60, m8:59, m9:58, m10:57, m11:null },
  { cohort:'Mar', m0:100, m1:85, m2:78, m3:73, m4:70, m5:67, m6:65, m7:63, m8:62, m9:61, m10:null, m11:null },
  { cohort:'Apr', m0:100, m1:86, m2:79, m3:74, m4:71, m5:68, m6:66, m7:64, m8:63, m9:null, m10:null, m11:null },
  { cohort:'May', m0:100, m1:87, m2:80, m3:76, m4:73, m5:70, m6:68, m7:66, m8:null, m9:null, m10:null, m11:null },
  { cohort:'Jun', m0:100, m1:88, m2:81, m3:77, m4:74, m5:71, m6:69, m7:null, m8:null, m9:null, m10:null, m11:null },
  { cohort:'Jul', m0:100, m1:88, m2:82, m3:78, m4:75, m5:72, m6:null, m7:null, m8:null, m9:null, m10:null, m11:null },
  { cohort:'Aug', m0:100, m1:89, m2:83, m3:79, m4:76, m5:null, m6:null, m7:null, m8:null, m9:null, m10:null, m11:null },
  { cohort:'Sep', m0:100, m1:90, m2:84, m3:80, m4:null, m5:null, m6:null, m7:null, m8:null, m9:null, m10:null, m11:null },
  { cohort:'Oct', m0:100, m1:91, m2:85, m3:null, m4:null, m5:null, m6:null, m7:null, m8:null, m9:null, m10:null, m11:null },
  { cohort:'Nov', m0:100, m1:92, m2:null, m3:null, m4:null, m5:null, m6:null, m7:null, m8:null, m9:null, m10:null, m11:null },
  { cohort:'Dec', m0:100, m1:null, m2:null, m3:null, m4:null, m5:null, m6:null, m7:null, m8:null, m9:null, m10:null, m11:null },
]

export const CHURN_REASONS = [
  { reason: 'Too expensive',          pct: 32, trend: 'up',   emoji: '💸' },
  { reason: 'Missing features',       pct: 24, trend: 'down', emoji: '🧩' },
  { reason: 'Switched competitor',    pct: 19, trend: 'up',   emoji: '🔄' },
  { reason: 'Poor onboarding',        pct: 13, trend: 'down', emoji: '📉' },
  { reason: 'Not using product',      pct:  8, trend: 'down', emoji: '😴' },
  { reason: 'Technical issues',       pct:  4, trend: 'same', emoji: '⚙️' },
]

export const FORECAST_DATA = [
  { month:'Sep', actual:94.2, forecast:null,  lo:null,  hi:null  },
  { month:'Oct', actual:94.5, forecast:null,  lo:null,  hi:null  },
  { month:'Nov', actual:94.6, forecast:null,  lo:null,  hi:null  },
  { month:'Dec', actual:94.8, forecast:94.8,  lo:94.4,  hi:95.2  },
  { month:'Jan', actual:null,  forecast:95.1,  lo:94.4,  hi:95.8  },
  { month:'Feb', actual:null,  forecast:95.3,  lo:94.4,  hi:96.2  },
  { month:'Mar', actual:null,  forecast:95.6,  lo:94.5,  hi:96.7  },
  { month:'Apr', actual:null,  forecast:95.8,  lo:94.5,  hi:97.1  },
  { month:'May', actual:null,  forecast:96.0,  lo:94.4,  hi:97.6  },
  { month:'Jun', actual:null,  forecast:96.2,  lo:94.3,  hi:98.1  },
]

export const SMART_INSIGHTS = [
  {
    id: 1, category: 'Critical', color: '#E63946',
    title: 'Early-tenure churn is your #1 risk',
    metric: '22.1% churn in month 0–3',
    detail: 'Customers in their first 3 months churn at 22.1% — 15× higher than 2+ year customers. A structured 30-day onboarding sequence could reduce this by up to 40%.',
    action: 'Build a Day 1 / Day 14 / Day 30 onboarding email sequence',
    chartRef: 'tenure',
  },
  {
    id: 2, category: 'Revenue', color: '#C1121F',
    title: 'Annual plans retain 6× better',
    metric: '1.4% vs 9.2% churn rate',
    detail: 'Enterprise customers (mostly annual) churn at 1.4% vs 9.2% for Starter monthly users. A 20% annual discount campaign could shift 10–15% of monthly users to annual plans.',
    action: 'Launch annual plan promotion with 20% upfront discount',
    chartRef: 'plan',
  },
  {
    id: 3, category: 'Growth', color: '#52B788',
    title: 'Retention improved 3.6pp in 12 months',
    metric: '91.2% → 94.8%',
    detail: 'Steady improvement from 91.2% to 94.8% over 2024. If the trend holds, you will hit 96%+ by June 2025 — a company record and best-in-class for SaaS.',
    action: 'Continue product velocity and document what is working',
    chartRef: 'retention',
  },
  {
    id: 4, category: 'Regional', color: '#E8C547',
    title: 'LATAM churns at 2.2× global average',
    metric: '9.1% vs 5.2% global',
    detail: 'Latin America shows 9.1% churn vs 5.2% globally. Currency volatility and price sensitivity are key drivers. Localized BRL/MXN pricing could cut this to 5%.',
    action: 'Introduce LATAM-specific pricing in BRL and MXN',
    chartRef: 'region',
  },
  {
    id: 5, category: 'Product', color: '#2EC4B6',
    title: '32% of churners cite pricing only',
    metric: '$25 Growth plan opportunity',
    detail: 'Price — not product — is the top churn driver. There is a gap between Starter ($10) and Pro ($40). A $25 Growth tier could capture price-sensitive Pro churners.',
    action: 'Test a $25/mo Growth plan with Pro-lite features',
    chartRef: 'reasons',
  },
]

export const HEALTH_RADAR = [
  { metric: 'Engagement',   score: 74 },
  { metric: 'NPS',          score: 62 },
  { metric: 'Support',      score: 81 },
  { metric: 'Expansion',    score: 55 },
  { metric: 'Onboarding',   score: 68 },
  { metric: 'Usage Depth',  score: 77 },
]

export const LIVE_EVENTS = [
  { type:'churn',   user:'Acme Corp (Pro)',       action:'Cancelled subscription',   color:'#E63946' },
  { type:'retain',  user:'TechFlow Inc',           action:'Renewed Enterprise plan',  color:'#52B788' },
  { type:'upgrade', user:'DataPulse Ltd',          action:'Upgraded Starter → Pro',   color:'#C1121F' },
  { type:'churn',   user:'user_8821@gmail.com',    action:'Downgraded to Free',       color:'#E63946' },
  { type:'retain',  user:'NovaSoft GmbH',          action:'Auto-renewed annual plan', color:'#52B788' },
  { type:'upgrade', user:'Quantum Labs',           action:'Added 5 team seats',       color:'#E8C547' },
  { type:'churn',   user:'user_3390@hotmail.com',  action:'Subscription expired',     color:'#E63946' },
  { type:'retain',  user:'Clarity Analytics',      action:'Renewed Business plan',    color:'#52B788' },
  { type:'upgrade', user:'Apex Digital',           action:'Upgraded to Enterprise',   color:'#2EC4B6' },
]

export const RECOMMENDATIONS = [
  { priority:'P0', title:'30-day onboarding email sequence', impact:'Reduce early churn ~40%',          effort:'Medium', revenue:'+$34K MRR', color:'#E63946' },
  { priority:'P1', title:'Introduce $25/mo Growth plan',     impact:'Capture price-sensitive churners', effort:'Low',    revenue:'+$18K MRR', color:'#E8C547' },
  { priority:'P1', title:'LATAM localized pricing (BRL/MXN)',impact:'Cut LATAM churn 9.1% → 5%',       effort:'High',   revenue:'+$12K MRR', color:'#C1121F' },
  { priority:'P2', title:'Annual plan discount campaign',    impact:'+10% annual conversions',          effort:'Low',    revenue:'+$28K MRR', color:'#52B788' },
  { priority:'P2', title:'Proactive churn prediction alerts',impact:'Flag at-risk users 30 days early', effort:'Medium', revenue:'+$9K MRR',  color:'#2EC4B6' },
]

export const AI_KNOWLEDGE = [
  {
    keys: ['churn rate','churn','churning','how many'],
    answer: `**Current churn rate: 5.2%** — down from 8.8% in January 2024 (a 3.6pp improvement over 12 months).\n\n**Breakdown by segment:**\n• Free plan: 18.4%\n• Starter: 9.2%\n• Pro: 5.8%\n• Business: 3.1%\n• Enterprise: 1.4%\n\n**Biggest risk:** Customers aged 0–3 months churn at 22.1% — 15× higher than long-tenure users. First-90-days experience is everything.`,
  },
  {
    keys: ['retention','retain','keeping','loyal'],
    answer: `**Retention rate: 94.8%** — up from 91.2% in Jan 2024.\n\n**What's working:**\n✅ Enterprise cohorts show 98.6% retention after Year 1\n✅ Annual plan customers are 6× more sticky than monthly\n✅ Recent cohorts (Sep–Dec) have the highest Month-1 retention ever\n\n**AI forecast:** On track for 96.2% by June 2025 if current trends hold.`,
  },
  {
    keys: ['revenue','mrr','money','income','arr'],
    answer: `**MRR: $284,750** (+8.4% month-over-month)\n\n**Revenue by plan:**\n• Enterprise: $269,400 (47%)\n• Pro: $128,400 (23%)\n• Business: $98,010 (17%)\n• Starter: $28,900 (5%)\n• Free: $0 (0%)\n\n**Opportunity:** The Free tier (3,420 users, 26.6% of base) generates zero revenue. Converting just 8% to Starter adds ~$25K MRR instantly.`,
  },
  {
    keys: ['latam','latin','brazil','mexico','region','geography'],
    answer: `**LATAM churn: 9.1%** — 2.2× the global average of 5.2%.\n\n**Root causes:**\n• Currency volatility (BRL, MXN, ARS fluctuations)\n• Price-to-income ratio much higher than US/Europe\n• Limited local payment methods\n\n**Fix:** Introduce BRL and MXN pricing tiers, offer monthly billing flexibility, and create a LATAM-specific Starter plan at ~$6/mo.\n\n**Estimated recovery:** +$8K MRR if LATAM churn drops to 5%.`,
  },
  {
    keys: ['plan','pricing','tier','free','starter','pro','enterprise','upgrade'],
    answer: `**Plan performance (churn vs revenue):**\n\n| Plan       | Churn | Revenue  | Customers |\n|------------|-------|----------|-----------|\n| Free       | 18.4% | $0       | 3,420     |\n| Starter    | 9.2%  | $28.9K   | 2,890     |\n| Pro        | 5.8%  | $128.4K  | 3,210     |\n| Business   | 3.1%  | $98K     | 1,980     |\n| Enterprise | 1.4%  | $269.4K  | 1,347     |\n\n**Key gap:** No plan between $10 (Starter) and $40 (Pro). A $25 Growth tier could convert 15–20% of Pro churners.`,
  },
  {
    keys: ['cohort','month 1','onboarding','first month','new users'],
    answer: `**Cohort retention is improving:**\n\n• Jan 2024 cohort: 84% retained at Month 1 → 57% at Month 11\n• Dec 2024 cohort: 92% retained at Month 1 (best ever)\n\n**Critical insight:** The steepest drop happens between Month 0 and Month 3 across all cohorts. After Month 6, retention stabilizes significantly.\n\n**Fix:** Structured onboarding at Day 1, Day 14, and Day 30 could raise Month-1 retention from 84% → 91%+ for early cohorts.`,
  },
  {
    keys: ['health','score','at risk','critical','segment'],
    answer: `**Customer health breakdown:**\n\n🟢 Healthy: 7,451 customers (58%)\n🟡 At Risk: 3,469 customers (27%)\n🔴 Critical: 1,927 customers (15%)\n\n**6 health dimensions scored:**\n• Engagement: 74/100\n• NPS: 62/100\n• Support quality: 81/100\n• Expansion signals: 55/100 ⚠️ (weakest)\n• Onboarding completion: 68/100\n• Feature usage depth: 77/100\n\n**Action:** Expansion score of 55 is the biggest gap — customers who don't expand are 3× more likely to churn.`,
  },
  {
    keys: ['recommend','action','what should','improve','fix','help','how to'],
    answer: `**Top 5 actions ranked by ROI:**\n\n1. 🔴 **P0 — 30-day onboarding sequence** → +$34K MRR\n2. 🟡 **P1 — $25 Growth plan** → +$18K MRR\n3. 🟡 **P1 — LATAM localized pricing** → +$12K MRR\n4. 🟢 **P2 — Annual plan campaign** → +$28K MRR\n5. 🔵 **P2 — Churn prediction alerts** → +$9K MRR\n\n**Total combined impact: +$101K MRR** over 6 months if all five ship on schedule.`,
  },
  {
    keys: ['forecast','predict','future','next year','2025','q1','q2'],
    answer: `**AI Retention Forecast (Jan–Jun 2025):**\n\n• Jan 2025: 95.1% (range: 94.4%–95.8%)\n• Mar 2025: 95.6% (range: 94.5%–96.7%)\n• Jun 2025: 96.2% (range: 94.3%–98.1%)\n\n**Model assumptions:**\n• Current 0.3pp/month improvement trend continues\n• No major product disruptions or pricing changes\n• Onboarding improvements land in Q1 2025\n\n**If all recommended actions ship in Q1:** You could exceed 96.5% by June — a company-best.`,
  },
]
