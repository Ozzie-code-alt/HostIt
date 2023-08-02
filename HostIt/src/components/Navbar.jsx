import React from 'react'
import './Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Navbar() {

const [show , setShow] = useState(false)

const handleClick = ()=>{
setShow(!show)
}
  return (
    <div className='nav-container'>
        <nav>
            <div className="Logo-Container">
                <h1>HOSTIT</h1>
            </div>
            <ul>
                <li>HOME</li>
                <li> <a href="#section3">ABOUT</a></li>
                <li> <a href="#section2">SERVICES</a></li>
                <li> <a href="#section5">PRICING</a></li>
                <li><a href="#section6">CONTACT US</a></li>
                <li> <FontAwesomeIcon icon={faMagnifyingGlass} /> </li>
                <li>CALL: 09123-456-789</li>
            </ul>

            <div className="nav-btn">
                <button onClick={handleClick}><FontAwesomeIcon icon = {faBars} /></button>{
                   show &&(
                    <div className="container-show">
                    <ul >
                    <li>HOME</li>
                    <li> <a href="#section3">ABOUT</a></li>
                    <li> <a href="#section2">SERVICES</a></li>
                    <li> <a href="#section5">PRICING</a></li>
                    <li><a href="#section6">CONTACT US</a></li>
                    <li> <FontAwesomeIcon icon={faMagnifyingGlass} /> </li>
                    <li>CALL: 09123-456-789</li>                 
                </ul>
                </div>
                    )
                }
            </div>
            
        </nav>
        </div>
  )
}

export default Navbar