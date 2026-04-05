export function fmtK(n) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)     return `$${(n / 1_000).toFixed(0)}K`
  return `$${n}`
}

export function exportPNG() {
  alert('Export feature: install html2canvas (npm i html2canvas) and integrate for PNG export.')
}
