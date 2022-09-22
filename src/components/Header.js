import "../styles/Header.css"
import { useState, useEffect } from 'react'
import BurgerMenu from "./BurgerMenu"
import { Link as LinkRouter } from 'react-router-dom'
import UserMenu from "./UserMenu"
import { useSelector, useDispatch } from 'react-redux';
import { logInAction } from '../features/actions/'
function Header() {
  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.isLogged)
  const [loggedUserRole, setLoggedUserRole] = useState(localStorage.getItem("userRole"))
  useEffect(() => {
    setLoggedUserRole(localStorage.getItem("userRole"))
  }, [isLogged])
  useEffect(() => {
    if (loggedUserRole) {
      dispatch(logInAction())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="header-container">
      <div className="logo-nav">
        <img src="/img/suitcase.png" alt="headerIcon" className="suitcase-logo" />
        <BurgerMenu />
        <nav>
          <LinkRouter to='/' className="navLink">Home</LinkRouter>
          <LinkRouter to='/Cities' className="navLink">Cities</LinkRouter>
          {loggedUserRole &&
            <LinkRouter to='/MyTineraries' className="navLink">MyTineraries</LinkRouter>
          }
          {loggedUserRole === "admin" &&
            <>
              <LinkRouter to='/NewCity' className="navLink">NewCity</LinkRouter>
              <LinkRouter to='/EditCity' className="navLink">EditCity</LinkRouter>
            </>
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