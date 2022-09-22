import { useState, useEffect, useRef } from 'react'
import "../styles/Header.css"
import { Link as LinkRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logInAction } from '../features/actions/'

export default function BurgerMenu() {
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
  let menuContent
  if (loggedUserRole) {
    menuContent = ([<LinkRouter className='navLink' to='/MyTineraries' key='MyTineraries'>MyTineraries</LinkRouter>])
  }
  if (loggedUserRole === 'admin') {
    menuContent = ([...menuContent,
    <LinkRouter to='/NewCity' className="navLink" key='NewCity'>NewCity</LinkRouter>,
    <LinkRouter to='/EditCity' className="navLink" key='EditCity'>EditCity</LinkRouter>
    ])
  }
  const [open, setOpen] = useState(false)
  const menuIcon = useRef()
  const handleToggleMenu = () => { setOpen(!open) }
  const handleCloseMenu = (e) => {
    const isClickInside = menuIcon.current.contains(e.target)
    if (menuIcon.current !== e.target && !isClickInside) {
      setOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleCloseMenu)
    return () => document.removeEventListener('click', handleCloseMenu)
  }, [])
  return (
    <div className='burger-nav'>
      <button ref={menuIcon} className='burger-button' onClick={handleToggleMenu}><img className='burger-img' src='/img/burger.svg' alt='burgerImg' />
        <div>
          {
            open && <div className='burger-menu'>
              <LinkRouter to='/' className="navLink" key='Home'>Home</LinkRouter>
              <LinkRouter to='/Cities' className="navLink" key='Cities'>Cities</LinkRouter>
              {menuContent}
            </div>
          }
        </div>
      </button>
    </div>
  )
}
