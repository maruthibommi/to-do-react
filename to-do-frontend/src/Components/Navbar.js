import React from 'react'
import '../styles.css'

function Navbar() {
  return (
    <nav className='nav'>
        <a href = "/"  >Homepage</a>
        <ul>
            <li>
                <a href = "/Signup" >SignUp</a>
            </li>
            <li>
                <a href = "/Login" >Login</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar