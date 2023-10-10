import React from 'react'
import '../styles/Contact.scss'

const Contact = () => {
    return (
      <div className='contact_section'>
        <div className='contact_title'>CONTACT</div>
        <div className='contact_info'>
        <div className='contact_email' onClick={() => window.open('mailto:ammarj15@gmail.com')}>ammarj15@gmail.com</div>
        <div className='contact_num'>(954)-591-9800</div>
        <hr className='hr_contact'></hr>
        <contianer className='bottom_info'>
        <div className="link" onClick={() => window.open("https://www.linkedin.com/in/ammar-jivraj-792818188", "mywindow")}>LinkedIn</div>
        <div>Made in sunny South Florida</div>
        <div className='designInsp'>Design inspired by Andrew of Code+Ink </div>
        </contianer>
        </div>
      </div>
    );
  };

  export default Contact;