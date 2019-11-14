import React from "react";
import "./About.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function About() {
  console.log("about");
  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="about">
        <div>
          <h1>About Me</h1>
          <hr />
          <h3>Early Life:</h3>
          <p>
            Hi, I'm Muhsin a self taught web developer from Kerala, India. I was
            an average kid in school who loved science and technologies.
            Eventhough I was curios about how the internet worked, I didn't know
            much.
          </p>
          <h3>School Life:</h3>
          <p>
            I didn't do well in school, at least not enough to start a science
            major after school. I chose commerce and actually did good. And then
            college happened, Since I was a Commerce student I couldn't get into
            BCA (Bachelor of Computer Science) or any other Computer Science
            Courses. So I chose BCom (Bachelor of Commerce). I haven't completed
            my course yet.
          </p>
          <h3>Coding Life:</h3>
          <p>
            My passion for coding started with my brother buying me my first
            computer when I was like 15. He gave me a lot of tutorials on
            different languages. I started with HTML and I loved it. I made some
            "ugly" looking websites and was very proud of it, untill I started
            on CSS. Then it quickly become a challenge. I started looking for
            "free" online courses, and found
            <a href="https;//www.freecodecamp.org">freeCodeCamp</a>. I started
            their courses and learned a lot. Especially from their challenges. I
            completed their courses. My next source was youtube. I started to
            dive deep into javascript, learned react-js and node-js.
          </p>
          <h3>Besides coding:</h3>
          <p>
            I like video games and movies. and who doesn't love musics. I want
            to travel a lot before I take my last breath, but I haven't started
            it yet. Maybe in the future.
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
              <a href="https://www.github.com/portfolio"> view repo</a>
            </small>
          </div>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
}
