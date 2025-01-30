import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user.jpg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <p>I am a frontend developer from, pakistan with 2+ years of experience.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <p className="footer-bottom-left">© 2025 Fatima Shahzadi. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with Me</p>
        </div>
    </div>
  )
}

export default Footer
