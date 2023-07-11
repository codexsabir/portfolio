// import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import React from "react";
// import emailjs from "@emailjs/browser";

function Contact() {
  return (
    <>
    <div className="cmain">
<div className="clchi">
<div className="slchi">
<span>Get in touch</span>
<span>Contact me</span>
<div className="blur blur1" style={{ background: "#ABF1FF94", 'top':'9rem','left': '-8rem'}}></div>

</div>
</div>

<div className="crchi">
<form >
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span></span>
          <div
            className="blur c-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
</div>
    </div>
    </>
  )
}

export default Contact