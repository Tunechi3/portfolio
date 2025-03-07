import React from "react";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <div className="image-container">
          <img src="./public/images/Portfolio.jpg" alt="Profile" className="profile-pic" height={480}/>
        </div>
        
        <div className="text-content">
          <h1><span className="gradient-text">RACHAEL</span> OKHAVHE</h1>
          <p>
          <b className="Hi">Hi,</b> I’m Racheal, a professional makeup artist passionate about beauty and transformation. With a background in Theater and Media Arts, I specialize in bridal, editorial, and special event makeup, tailoring each look to the occasion and your unique beauty.
          </p>
          <p>
          I also have experience with high-definition, camera-ready makeup. Whether it’s soft glam, bold editorial, or flawless professional makeup, I’m here to help you shine.
          </p>
          <div className="social-icons">
            <span className="icon">🔵</span>
            <span className="icon">⚪</span>
            <span className="icon">⚫</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
