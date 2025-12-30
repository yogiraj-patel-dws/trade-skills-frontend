import React from 'react'
import App from './App.tsx'
import './index.css'
import { ReactQueryProvider } from './providers/ReactQueryProvider.tsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </React.StrictMode>,
)
