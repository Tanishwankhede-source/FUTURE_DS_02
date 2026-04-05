# ChurnVision Pro

A comprehensive customer churn analysis dashboard built with React, Vite, and Recharts. ChurnVision Pro provides real-time insights into customer retention, churn patterns, revenue trends, and predictive analytics.

## 📋 Project Overview

ChurnVision Pro is a data analytics platform that helps businesses understand and predict customer churn. It features interactive charts, AI-powered insights, cohort analysis, and customer segmentation tools.

### Key Features

- **Interactive Dashboard**: Real-time KPI monitoring and visual analytics
- **Churn Analysis**: Breakdown of churn reasons and customer segments
- **Revenue Insights**: Track revenue trends and forecast future performance
- **Cohort Analysis**: Heatmap visualization of customer cohorts over time
- **Customer Health**: Monitor individual customer health scores
- **Predictive Forecast**: AI-powered churn forecasting
- **AI Assistant**: Smart recommendations and insights
- **Story Mode**: Guided narrative analytics experience
- **Activity Feed**: Real-time system activity monitoring
- **Dynamic Filtering**: Filter data by metrics and dimensions

## 🏗️ Project Structure

```
src/
├── components/
│   ├── charts/                 # Data visualization components
│   │   ├── ChurnReasonsChart.jsx
│   │   ├── ChurnSegmentChart.jsx
│   │   ├── CohortHeatmap.jsx
│   │   ├── CustomerHealthPanel.jsx
│   │   ├── CustomerPieChart.jsx
│   │   ├── ForecastPanel.jsx
│   │   ├── RetentionChart.jsx
│   │   └── RevenueTrendChart.jsx
│   ├── filters/                # Filter controls
│   │   └── FilterPanel.jsx
│   ├── insights/               # Analytics insights
│   │   ├── InsightsPanel.jsx
│   │   ├── RecommendationsPanel.jsx
│   │   └── StoryMode.jsx
│   ├── kpi/                    # Key performance indicators
│   │   └── KPISection.jsx
│   ├── layout/                 # Layout components
│   │   ├── AnimatedBackground.jsx
│   │   └── Header.jsx
│   └── ui/                     # Reusable UI components
│       ├── ActivityFeed.jsx
│       ├── AIAssistant.jsx
│       └── LoadingSkeleton.jsx
├── data/
│   └── dataset.js              # Sample data and configuration
├── hooks/                      # Custom React hooks
│   ├── useCountUp.js           # Number animation hook
│   └── useTheme.js             # Theme management hook
├── utils/
│   └── helpers.js              # Utility functions
├── styles/
│   └── index.css               # Global styles
├── App.jsx                     # Main application component
└── main.jsx                    # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd ChurnVision_Final/ChurnVision
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

   The application will open at `http://localhost:5173` (or another available port).

## 📦 Available Scripts

- **`npm run dev`** - Start the Vite development server with hot module reloading
- **`npm run build`** - Build the project for production
- **`npm run preview`** - Preview the production build locally

## 🛠️ Technologies Used

- **React** (^18.3.1) - UI framework
- **Vite** (^5.3.4) - Build tool and dev server
- **Recharts** (^2.12.7) - Data visualization library
- **Framer Motion** (^11.3.8) - Animation library
- **TailwindCSS** (^3.4.7) - Utility-first CSS framework
- **Lucide React** (^0.408.0) - Icon library
- **PostCSS** & **Autoprefixer** - CSS processing

## 🎨 Styling

The project uses TailwindCSS for styling. Configuration can be found in:
- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.js` - PostCSS configuration
- `src/styles/index.css` - Global styles

## 🚀 Deployment

The project is configured for deployment on Netlify using the `netlify.toml` configuration file.

### Build for Production

```bash
npm run build
```

This generates a production-ready build in the `dist/` directory.

## 📊 Data

Sample data for the dashboard can be found in `src/data/dataset.js`. Update this file with your own data source or API endpoints as needed.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📝 License

This project is private and proprietary.

---

**Version**: 2.0.0  
**Last Updated**: April 2026
