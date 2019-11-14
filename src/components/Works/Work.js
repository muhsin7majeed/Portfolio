import React from "react";
import "./Work.css";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

// works
import ReactWallet from "../Assets/works/react-wallet.png";
import ReactWeather from "../Assets/works/react-weather.png";
import RockPaper from "../Assets/works/rock-paper.png";
import Intact from "../Assets/works/intactbuilders.png";
import Lychees from "../Assets/works/lychees.png";
import MainLanding from "../Assets/works/main-lp.png";
import MinimalLanding from "../Assets/works/minimal-lp.png";
import OriginalTrombone from "../Assets/works/original-trombone.png";
import GaBlog from "../Assets/works/ga-blog.png";

export default function Work() {
  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}
    >
      <div>
        <div className="works">
          <h1>my works</h1>
          <hr />
          <div className="work-item">
            <h3>React Wallet App</h3>
            <p>
              I made this app for learning react and loopback. I used React,
              Loopback, bootstrap. Features : Authentication (create account and
              login, form validation seems to work fine) Add money (fake money
              obviously :p) Send money to other users with their "wallet
              address" Features I would like to add; Notification when received
              money Message when sending money Add user image on sign in Edit
              user details ...
            </p>
            <code>React / Bootstrap / Loopback / MongoDB</code>
            <a
              rel="noopener noreferrer"
              href="https://loopback-react-btc-wallet.herokuapp.com/"
              target="_blank"
            >
              <img src={ReactWallet} alt="wallet app made with react" />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://github.com/muhsin7majeed/loopback-react-btc-wallet"
              target="_blank"
            >
              Github
            </a>
            <a
              rel="noopener noreferrer"
              href="https://loopback-react-btc-wallet.herokuapp.com/"
              target="_blank"
            >
              Demo
            </a>
          </div>
          <hr />
          <div className="work-item">
            <h3>React Weather App</h3>
            <p>
              I made this Weather-App to learn react-js. This is just a simple
              web-app that fetches weather details from Dark Sky Api. I tried to
              add a search field, but couldn't find a FREE api to get location
              details ( google maps api throws 'request limit reached ' error
              :p). So, now this app only shows weather for your current
              location. (That too is not accurate :( ) Also it has a problem
              with getting geolocation of some mobile devices.
            </p>
            <code>React / Bootstrap</code>
            <a
              rel="noopener noreferrer"
              href="https://muhsin7majeed.github.io/weather-app/"
              target="_blank"
            >
              <img src={ReactWeather} alt="weather app made with react" />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://github.com/muhsin7majeed/weather-app"
              target="_blank"
            >
              Github
            </a>
            <a
              rel="noopener noreferrer"
              href="https://muhsin7majeed.github.io/weather-app/"
              target="_blank"
            >
              Demo
            </a>
          </div>

          <hr />
          <div className="work-item">
            <h3>Rock Paper Scissors</h3>
            <p>
              I made this game by following
              <a
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=qWPtKtYEsN4&list=PLDyQo7g0_nsX8_gZAB8KD1lL4j4halQBJ&index=10"
              >
                Dev Ed's youtube video
              </a>
            </p>
            <code>Html / css / JavaScript</code>
            <a
              rel="noopener noreferrer"
              href="https://muhsin7majeed.github.io/RockPaperScissors/"
              target="_blank"
            >
              <img
                src={RockPaper}
                alt="rock paper scissor made with javascript"
              />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://github.com/muhsin7majeed/RockPaperScissors"
              target="_blank"
            >
              Github
            </a>
            <a
              rel="noopener noreferrer"
              href="https://muhsin7majeed.github.io/RockPaperScissors/"
              target="_blank"
            >
              Demo
            </a>
          </div>

          <hr />
          <div className="work-item">
            <h3>Intact Builders</h3>
            <p>I made this for one friend for his contract business</p>
            <code>Html / css / JavaScript</code>
            <a
              rel="noopener noreferrer"
              href="https://muhsin7majeed.github.io/intactbuilders.com/"
              target="_blank"
            >
              <img src={Intact} alt="website screenshot" />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://github.com/muhsin7majeed/intactbuilders.com"
              target="_blank"
            >
              Github
            </a>
            <a
              rel="noopener noreferrer"
              href="https://muhsin7majeed.github.io/intactbuilders.com/"
              target="_blank"
            >
              Demo
            </a>
          </div>
          <hr />
          <div className="work-item">
            <h3>Lychees</h3>
            <p>I made this for one friend for her Beauty Clinic business</p>
            <code>Html / css / Bootstrap / JavaScript</code>

            <a
              href="https://muhsin7majeed.github.io/lychees/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={Lychees} alt="website screenshot" />
            </a>

            <a
              href="https://github.com/muhsin7majeed/lychees"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://muhsin7majeed.github.io/lychees/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Demo
            </a>
          </div>

          <hr />
          <div className="work-item">
            <h3>Personal Portfolio 1</h3>
            <p>I made this for learning html and css</p>
            <code>Html / css / JavaScript</code>
            <a
              href="https://muhsin7majeed.github.io/main-lp/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={MainLanding} alt="website screenshot" />
            </a>

            <a
              href="https://github.com/muhsin7majeed/main-lp"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </div>
          <hr />
          <div className="work-item">
            <h3>Personal Portfolio 2</h3>
            <p>I made this for learning html and css</p>
            <code>Html / css </code>
            <a
              href="https://muhsin7majeed.github.io/ga_blog/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={GaBlog} alt="website screenshot" />
            </a>

            <a
              href="https://github.com/muhsin7majeed/ga_blog"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://muhsin7majeed.github.io/ga_blog/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Demo
            </a>
          </div>

          <hr />
          <div className="work-item">
            <h3>Personal Portfolio 3</h3>
            <p>I made this for learning html and css</p>
            <code>Html / css / JavaScript</code>
            <a
              href="https://muhsin7majeed.github.io/minimal_lp/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={MinimalLanding} alt="website screenshot" />
            </a>

            <a
              href="https://github.com/muhsin7majeed/minimal_lp"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://muhsin7majeed.github.io/minimal_lp/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Demo
            </a>
          </div>

          <hr />
          <div className="work-item">
            <h3>FreeCodeCamp Project</h3>
            <p>
              This was my first ever "work", I made this as a project by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="freecodecamp.org"
              >
                FreeCodeCamp
              </a>
            </p>
            <code>Html / css </code>
            <a
              rel="noopener noreferrer"
              href="https://muhsin7majeed.github.io/codecamplanding_page/"
              target="_blank"
            >
              <img src={OriginalTrombone} alt="website screenshot" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/muhsin7majeed/codecamplanding_page"
              target="_blank"
            >
              Github
            </a>
            <a
              rel="noopener noreferrer"
              href="https://muhsin7majeed.github.io/codecamplanding_page/"
              target="_blank"
            >
              Demo
            </a>
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/muhsin7majeed"
          >
            View More @Github
          </a>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
}
