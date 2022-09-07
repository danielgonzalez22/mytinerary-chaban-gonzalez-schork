import "../styles/Header.css"
import BurgerMenu from "./BurgerMenu"
import { Link as LinkRouter } from 'react-router-dom'
function Header() {
  return (
    <div className="header-container">
      <div className="logo-nav">
        <img src="/img/suitcase.png" alt="headerIcon" className="suitcase-logo" />
      <BurgerMenu />
        <nav>
          <LinkRouter to='/' className="navLink">Home</LinkRouter>
          <LinkRouter to='/Cities' className="navLink">Cities</LinkRouter>
          <LinkRouter to='/NewCity' className="navLink">NewCity</LinkRouter>
          <LinkRouter to='/EditCity' className="navLink">EditCity</LinkRouter>
        </nav>
      </div>
      <div className="accounts">
        <img src="/img/user.svg" alt="accountIcon" />
      </div>
    </div>
  )
}
export default Header