import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./Home.css";

export default function Home() {
  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div className="home">
        <div>
          <h1>I'm Muhsin</h1>
          <p>a web dev</p>
          <button>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:muhsin7ak@gmail.com"
            >
              Contact me
            </a>
          </button>
          <button>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1vH8PsMnvmIIsKhoruTnvjbbEyvP1aLLT/view?usp=sharing"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
}
