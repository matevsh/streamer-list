import React from 'react'
import ReactDOM from 'react-dom/client'

import { ProvidersRoot } from './common/providers/ProvidersRoot.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProvidersRoot />
  </React.StrictMode>
)
