import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {SApp} from './App.jsx'
import {TApp2} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SApp />
    <TApp2 />
  </StrictMode>,
)
