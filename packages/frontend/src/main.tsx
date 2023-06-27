import React from 'react'
import ReactDOM from 'react-dom/client'

import {RouterRoot} from "./common/providers/RouterRoot.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterRoot />
  </React.StrictMode>,
)
