// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SearchProvider } from './context/searchContext'
import App from './App.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SearchProvider>
            <App />
        </SearchProvider>
    </StrictMode>
)