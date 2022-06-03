import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div>
      <form>
        <label>Your Name</label>
        <input type='text' placeholder='Full Name'></input>
        <label>Email</label>
        <input type='email' placeholder='E-Mail'></input>
        <label>Phone Number</label>
        <input type='text' placeholder='999-999-9999'></input>
        <label>Subject</label>
        <input type='Text' placeholder='Title of Inquiry'></input>
        <label>Details</label>
        <textarea rows='6' placeholder='Type a short message here' />
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm;