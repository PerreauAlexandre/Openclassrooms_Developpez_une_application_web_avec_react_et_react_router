import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom'
import './Global.scss'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import Home from './pages/Home/Home.tsx'
import FicheLogement from './pages/FicheLogement/FicheLogement.tsx'
import APropos from './pages/APropos/APropos.tsx'
import Error from './pages/Error/Error.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:logementId" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" replace={true} />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
)
