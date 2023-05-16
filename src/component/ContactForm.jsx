import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const from = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q8aitnb', 'template_echkeug', e.target, 'wmdInJSGadcXUjwDA')
      .then((result) => {
        console.log(result.text);
        // Handle success
      }, (error) => {
        console.log(error.text);
        // Handle error
      });

    e.target.reset();
  };
  return (
    <form className="php-email-form" ref={from} onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 form-group">
          <input type="text" name="user_name" className="form-control" id="name" placeholder="Your Name" required />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          
          <input type="email" name="user_email"  className="form-control" id="email" placeholder="Your Email" required/>
        </div>
      </div>
      <div className="form-group mt-3">
        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
      </div>
      <div className="form-group mt-3">
        <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
      </div>
      <div className="my-3">
      </div>
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
