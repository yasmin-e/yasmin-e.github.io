import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('Send');
  let buttonText = status;
  const handleChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    if (id === 'name') { setName(value); }
    else if (id === 'email') { setEmail(value); }
    else if (id === 'message') { setMessage(value); }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    let details = {
      name: name,
      email: email,
      message: message,
    };
    let res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    let parsedRes = await res.json();
    if (parsedRes.status === 'ok') {
      setStatus('Sent');
      setTimeout(() => {
        setName(''); 
        setEmail(''); 
        setMessage(''); 
        setStatus('Send');
      }, 1000);
      alert('Thank you for your message, I just got it in my inbox!');
    } else if (parsedRes.status === 'error') {
      alert('Oops! Something went wrong. Try again later.');
    } 
  };
 return (
  <div>
    <h1 className="contact-title">stay in touch</h1>
   <form 
    onSubmit={handleSubmit}
    method="POST"
    className="form"
   >
    <div className="info">
    <div className="stamp" />
    <div className="inputs">
    <label htmlFor="name" className="label">
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleChange}
        placeholder="a name"
        required
        className="input"
      />
    </label>
    <label htmlFor="email" className="label">
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        placeholder="an e-mail address"
        required
        className="input"
      />
    </label>
    </div>
    </div>
    <div className="seperation" />
    <div className="msg">
    <label htmlFor="message" className="label">
      <textarea
        id="message"
        value={message}
        onChange={handleChange}
        placeholder="a free speech goes here"
        required
        className="input textarea"
      />
    </label>
    <button type="submit" className="button">{buttonText}</button>
    </div>
   </form>
  </div>
 );
}
export default ContactForm;
