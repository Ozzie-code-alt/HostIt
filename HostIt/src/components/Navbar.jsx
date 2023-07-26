import React from 'react'
import './Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <div className='nav-container'>
        <nav>
            <div className="Logo-Container">
                <h1>HOSTIT</h1>
            </div>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>PRICING</li>
                <li>CONTACT US</li>
                <li> <FontAwesomeIcon icon={faMagnifyingGlass} /> </li>
                <li>CALL: 09123-456-789</li>
            </ul>
        </nav>
        </div>
  )
}

export default Navbar