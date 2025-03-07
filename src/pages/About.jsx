import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <>
            <Navbar/>
            <div className="about-container">
                {/* <nav className="navbar">
                    <div className="logo">JL</div>
                    <ul className="nav-links">
                        <li>Home</li>
                        <li>Work</li>
                        <li>About Me</li>
                    </ul>
                    <button className="contact-btn">Contact Us</button>
                </nav> */}

                <div className="about-content">
                    <div className="profile-section">
                        <img src="./public/images/Portfolio.jpg" alt="Profile" className="profile-pic" />
                    </div>
                    <div className="info-section">
                        <h1 className="gradient-text">RACHAEL ANOGHENA OKHAVHE</h1>
                        <p>
                            Rachael Okhavhe is a a professional makeup artist passionate about beauty and transformation with a background in Theater and Media Arts. I have a strong creative and increasing passion to learn and grow in my field.
                        </p>
                        <h2 className="gradient-text">EDUCATION</h2>
                        <p>Helpers International School - (2004 - 2009)</p>
                        <p>Lily Child Junior High School - (2009 - 2012)</p>
                        <p>Landmark University Secondary School - (2012 - 2015)</p>
                        <p>Ambrose Ali University - (2020 - 2024)</p>
                        
                        <h2 className="gradient-text">EXPERIENCE</h2>
                        <ul>
                            <li><strong>DCUFF DRY CLEANING SERVICES - </strong>Customer Care Officer (2017 - 2019) </li> 
                        <ul className='bullet'>
                            <li className='bulleto'>Database Administration</li>
                            <li className='bulleto'>Proccessing Orders</li>
                            <li className='bulleto'>Communicate company's updates</li> <br />
                        </ul>
                            <li><strong>GRID MANAGEMENT - </strong> Student Internship (JAN - APR 2024)</li>
                        <ul className='bullet'>
                            <li className='bulleto'>Social Media Team </li>
                            <li className='bulleto'>Talent Management</li>
                            <li className='bulleto'>Research</li> <br />
                        </ul>
                            <li><strong>RAYYGLAM STUDIO - </strong> Makeup Artist (2019 - Till date)</li>
                        <ul className='bullet'>
                            <li className='bulleto'>Identifying Skin Tones</li>
                            <li className='bulleto'>Complete Makeup</li>
                            <li className='bulleto'>Tying Gele</li> <br />
                        </ul>
                        </ul>
                        <h2 className="gradient-text">SKILLS</h2>
                        <ul className='bullet'>
                            <li className='bulleto'>Lash Extension</li>
                            <li className='bulleto'>Editing pictures and videos</li>
                            <li className='bulleto'>Consultation on skin tones and products</li>
                            <li className='bulleto'>Makeup</li>
                            <li className='bulleto'>Tying gele</li>
                            <li className='bulleto'>Computer literacy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About