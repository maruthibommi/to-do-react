import React from 'react'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import '../styles.css'

function Navbar({user}) {
  

  const CustomLink = ({to,children, ...props}) =>{
      const resolvedPath = useResolvedPath(to)
      const isActive = useMatch({ path: resolvedPath.pathname, end: true })

      return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

  return (
    <nav className='nav'>
        <Link to = "/"  >Homepage</Link>
        <ul>
            
            {(user.name === "") ? 
              (<><CustomLink to='/Signup'>SignUp</CustomLink><CustomLink to='/Login'>Login</CustomLink></>) :
              (<CustomLink to = '/Logout'>Log Out</CustomLink>)
            }
        </ul>
    </nav>
  )
}

export default Navbar