import React, { useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./App.css";

// Components
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Particles from "react-particles-js";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(function() {
      setIsLoading(false);
    }, 1500);
  });
  return (
    <HashRouter basename="/">
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={100}
        transitionEnter={false}
        transitionLeave={false}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="App">
            <Particles
              className="particles"
              params={{
                particles: {
                  number: {
                    value: 50
                  },
                  size: {
                    value: 3
                  }
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse"
                    }
                  }
                }
              }}
            />
            <Navbar />
            <Container />
          </div>
        )}
      </ReactCSSTransitionGroup>
    </HashRouter>
  );
}

export default App;
