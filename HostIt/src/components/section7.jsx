import React from 'react'
import "./Styles/s7.css"
function Section7() {
  return (
    <div className='s7-main-container'>
        <div className="address-container">
            <div className="title-container">
                <h1>Address</h1>
            </div>
            <div className="links-container">
                <ul>
                    <li>Location</li>
                    <li>Call +0928-36283-321</li>
                    <li>mail@domain.com</li>
                </ul>
            </div>
        </div>

        <div className="links-container">
            <div className="title-container">
                <h1>Links</h1>
            </div>
            <div className="links-container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Contact Us</li>
                </ul>
            </div>

        </div>

        <div className="info-container">
            <div className="title-container">
                <h1>Info</h1>
            </div>

            <div className="paragraph-container">
                <p>necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
            </div>
        </div>

        <div className="Subscribe-container">
            <div className="title-container">
                <h1>Subscribe</h1>
            </div>

            <div className="enter-mail-container">
                <input type="text"  placeholder='Enter email'/>
            </div>

            <div className="btn-container">
                <button>Subscribe</button>
            </div>
        </div>

    </div>
  )
}

export default Section7