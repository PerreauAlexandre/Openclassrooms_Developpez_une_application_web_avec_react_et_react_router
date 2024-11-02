import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './components/Header/index.tsx'
import Footer from './components/Footer/index.tsx'
import Home from './pages/Home/index.tsx'
import FicheLogement from './pages/FicheLogement/index.tsx'
import APropos from './pages/APropos/index.tsx'
import Error from './pages/Error/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
)
