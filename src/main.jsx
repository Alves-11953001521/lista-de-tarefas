import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import TudoList from './assets/TudoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TudoList />
    
  </StrictMode>,
)
