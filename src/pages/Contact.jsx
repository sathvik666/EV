import React from 'react'
import './contactus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    
      <div className="contact-us">
  <h2 id='hhh'>Contact Us</h2>
  <ul>
    <div className="contact">
    <li><strong>Mail:</strong> <a href="mailto:info@rhyno.in">info@rhyno.in </a></li><FontAwesomeIcon icon={faEnvelope} beat id='icon' /></div>
    <div className="contact">
    <li><strong>Mobile No.:</strong> +91-9023987528</li> <FontAwesomeIcon icon={faPhone} shake id='icon' /></div>
    <div className="contact">
    <li><strong>Location:</strong><FontAwesomeIcon icon={faLocationDot} bounce id='icon' /> Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</li></div>
  </ul>

    </div>
  )
}

export default Contact
