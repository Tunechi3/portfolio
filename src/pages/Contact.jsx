import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <>
        <Navbar/>
          <div className="contact-container">
              <h1 className="gradient-text">Contact Me</h1>
              <p><strong>Address:</strong> 5 Police Commissioner Close, Balogun Town, Majek, Lagos State.</p>
              <p><strong>Instagram:</strong> <a href="https://www.instagram.com/rayy_glam?igsh=aHhnZGRjOXd5ZHI4" target="_blank">@rayy_glam</a></p>
              <p><strong>Email:</strong> rachaelgdwn03@gmail.com</p>
              <p><strong>Phone:</strong> +2347019450750</p>
          </div>
    </>
  )
}

export default Contact