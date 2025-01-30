import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail.png'
import phone_icon from '../../assets/phone.jpg'
import location_icon from '../../assets/location.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                  <img src={mail_icon} alt="" /> <p>fatimabinteghazanfar1312@gmail.com</p>
                </div>
                <div className="contact-detail">
                  <img src={phone_icon} alt="" /> <p>+923258796792</p>
                </div>
                <div className="contact-detail">
                  <img src={location_icon} alt="" /> <p>Abbottabad,KPK</p>
                </div>
            </div>
          </div>
          <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your Name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your Email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your Mesagge'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
          </form>
        </div>
    </div>
  )
}

export default Contact
