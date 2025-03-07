import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
          <nav className="navbar">
              <div className="logo">Rachael Okhavhe</div>
              <ul className="nav-links">
                <li><Link to={'/'} className="nav-link">Home</Link></li>
                <li><Link to={'/about'} className="nav-link">About</Link></li>
                <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              </ul>
          </nav>
    </>
  )
}

export default Navbar