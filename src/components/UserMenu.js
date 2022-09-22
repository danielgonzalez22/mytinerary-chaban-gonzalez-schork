import { useState, useEffect, useRef } from 'react'
import { Link as LinkRouter, useNavigate } from 'react-router-dom'

const UserMenu = () => {
  const pages = [
    {
      name: "Sign Up",
      to: "/auth/signup",
    },
    {
      name: "Login",
      to: "/auth/login",
    }
  ]
  const navigate = useNavigate();
  const navLinks = (page) => <LinkRouter className='navLink' to={page.to} key={page.name}> {page.name} </LinkRouter>
  const userLogged = localStorage.getItem("userId")
  const menuIcon = useRef()
  const handleLogOut = () => {
    localStorage.clear()
    navigate("/")
  }
  let menuContent
  if (userLogged) {
    menuContent = (<button onClick={handleLogOut}>Log Out</button>)
  } else {
    menuContent = (pages.map(navLinks))
  }
  const [open, setOpen] = useState(false)
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
    <div className='user-nav'>
      <button ref={menuIcon} className='user-button' onClick={handleToggleMenu}> <img src="/img/user.svg" alt="accountIcon" className='user-img' />
        <div>
          {
            open ? <div className='burger-menu'>
              {menuContent}
            </div> : null
          }
        </div>
      </button>
    </div>
  )
}
export default UserMenu