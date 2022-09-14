import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'


const pages = [
    {name:"SignUp",
    to: "./",

    },
    {name:"",
    to: "",

    }
]
const navLinks = (page) => <LinkRouter className='navLink' to={page.to} key= {page.name}> {page.name} </LinkRouter>

const UserMenu = () => {
    const [open, setOpen] = useState(false)

    const handleOpenMenu = () => {
        if (open == true){ setOpen(false)  } 
        else { setOpen(true)}   
    }


  return (
    <div className='user-nav'>
      <button className='user-button' onClick={handleOpenMenu}> <img src="/img/user.svg" alt="accountIcon" className='user-img'/>
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

export default UserMenu