import React from "react";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div className = "NewsLetter" >
        <h1>Get Exlusive Offers on Your Email</h1>
        <p>Subscribe to our Service & Stay Updated</p>
        <div>
            <input type="email" placeholder="Your Email Please ..?"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter