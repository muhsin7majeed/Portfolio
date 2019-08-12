import React from "react";
import "./About.css";

export default function About() {
  console.log("about");
  return (
    <div className="about">
      <div>
        <h1>About Me</h1>
        <hr />
        <p>
          I'm a motivated developer. I usually work in front-end, with html/css,
          javascript and libraries/frameworks like react, bootstrap. I also have
          knowledge in NodeJs and express. I like to learn new things and
          improve my skills.
        </p>
        <div className="socialIcons">
          <a href="https://www.facebook.com/muhsin7majeed">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://www.instagram.com/muhsin7majeed">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.Github.com/muhsin7majeed">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/muhsin7majeed">
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <div>
          <small>
            This site is made with React, 
            <a href="https://www.github.com/portfolio"> view repo to fork</a>
          </small>
        </div>
      </div>
    </div>
  );
}
