export const phone = `@media (max-width: ${599}px)`

export const [tabletPortrait, tabletLandscape, desktop] = [600, 900, 1200].map(
  bp => `@media (min-width: ${bp}px)`
)
