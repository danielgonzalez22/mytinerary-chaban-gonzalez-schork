import "../styles/Header.css"
import {useState, useEffect} from 'react'
import BurgerMenu from "./BurgerMenu"
import { Link as LinkRouter } from 'react-router-dom'
import UserMenu from "./UserMenu"
function Header() {
  const [loggedUserRole, setLoggedUserRole] = useState(localStorage.getItem("userRole"))
  useEffect(() => {
    setLoggedUserRole(localStorage.getItem("userRole"))
  },[])
  return (
    <div className="header-container">
      <div className="logo-nav">
        <img src="/img/suitcase.png" alt="headerIcon" className="suitcase-logo" />
        <BurgerMenu />
        <nav>
          <LinkRouter to='/' className="navLink">Home</LinkRouter>
          <LinkRouter to='/Cities' className="navLink">Cities</LinkRouter>
          {loggedUserRole ?
            <LinkRouter to='/MyTineraries' className="navLink">MyTineraries</LinkRouter>
            : null
          }
          {loggedUserRole === "admin" ?
            <>
              <LinkRouter to='/NewCity' className="navLink">NewCity</LinkRouter>
              <LinkRouter to='/EditCity' className="navLink">EditCity</LinkRouter>
            </>
            : null
          }
        </nav>
      </div>
      <div className="accounts">
        <UserMenu />

      </div>
    </div>
  )
}
export default Header