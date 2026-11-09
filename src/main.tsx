import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted fonts (all open source, via Fontsource)
import '@fontsource/league-gothic/400.css'
import '@fontsource/caprasimo/400.css'
import '@fontsource-variable/libre-franklin'
import '@fontsource/courier-prime/400.css'
import '@fontsource/courier-prime/700.css'
// Poster-only faces
import '@fontsource/unifrakturcook/700.css'
import '@fontsource/monoton/400.css'
import '@fontsource/shrikhand/400.css'
import '@fontsource/rye/400.css'
import '@fontsource/permanent-marker/400.css'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
