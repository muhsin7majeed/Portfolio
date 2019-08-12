import React from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Particles from "react-particles-js";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter basename="/">
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
    </HashRouter>
  );
}

export default App;
