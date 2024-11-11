import './Footer.scss'
import logoWhite from '../../assets/logo-white.svg'

function Footer() {
  return (
    <footer>
      <img src={logoWhite} alt="Logo" />
      <div className="footer-text">© 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer
