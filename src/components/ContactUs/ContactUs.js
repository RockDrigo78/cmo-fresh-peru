import React from 'react';
import './ContactUs.css';

function ContactUs (){
  return (
    <div className="ContactUs">
      <div className="row contact-form-row">          
        <div className="col-md-6">
            <h3 className="ContactUs-title">CMO Fresh Peru</h3>
            <hr/>
            <p>Email:</p>
            <p className="inp_txt">admin@cmofreshperu.com</p>
            <hr/>
        </div>
        <form className="col-md-6" action="https://formspree.io/rbdwebdevelopment@gmail.com" method="POST">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control inp_txt" placeholder="Name" required/>
          </div>
          <input type="hidden" name="_cc" value="aldofigueroa78@gmail.com" />
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="email" name="_replyto" className="form-control inp_txt" required/>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" placeholder="Message" className="form-control inp_txt" rows="4"></textarea>
          </div>
          <div className="form-group">
            <input type="submit" value="Send" className="btn btn-secondary btn-block"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;