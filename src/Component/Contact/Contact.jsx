import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>Please feel free to reach out to us if you have any questions, suggestions, or feedback.</p>
      <div className="contact-details">
        <h3>Email</h3>
        <p>info@library.com</p>
        <h3>Phone</h3>
        <p>123-456-7890</p>
        <h3>Address</h3>
        <p>123 Library Street, City, Country</p>
      </div>
    </div>
  )
}

export default Contact;