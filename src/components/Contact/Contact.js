import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact">
      <div>
        <h1>Contact Me</h1>
        <hr />
        <div className="form">
          <form
            target="_blank"
            action="mailto:muhsin7ak@gmail.com"
            method="post"
            enctype="text/plain"
          >
            <label htmlFor="name">Name</label>
            <input
              required
              name="Name"
              placeholder="enter your name"
              id="name"
              type="text"
            />
            <label htmlFor="email">E-mail</label>
            <input
              required
              name="Email"
              placeholder="enter your email"
              id="email"
              type="email"
            />
            <label htmlFor="message">Message</label>
            <textarea name="Message" placeholder="whats up?" id="message" />
            <button className="formBtn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
