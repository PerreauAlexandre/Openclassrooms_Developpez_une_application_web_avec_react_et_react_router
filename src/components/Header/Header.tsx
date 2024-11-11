import { NavLink } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
