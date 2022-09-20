import { useState } from 'react'
import "../styles/Header.css"
import { Link as LinkRouter } from 'react-router-dom'

const pages = [
  { name: 'Home', to: '/' },
  { name: 'Cities', to: '/Cities' },
  { name: 'NewCity', to: '/NewCity' },
  { name: 'EditCity', to: '/EditCity' }
]
const navLinks = (page) => <LinkRouter className='navLink' to={page.to} key={page.name}>{page.name}</LinkRouter>

export default function BurgerMenu() {
  const [open, setOpen] = useState(false)
  const handleOpenMenu = () => {
    if (open === true) { setOpen(false) }
    else { setOpen(true) }
  }
  return (
    <div className='burger-nav'>
      <button className='burger-button' onClick={handleOpenMenu}><img className='burger-img' src='/img/burger.svg' alt='burgerImg' />
        <div>
          {
            open ? <div className='burger-menu'>
              {pages.map(navLinks)}
            </div> : null
          }
        </div>
      </button>
    </div>
  )
}
