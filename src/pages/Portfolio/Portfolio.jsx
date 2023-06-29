import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Portfolio.css";
import Septre from "../../components/Septre/Septre";
import Introduction from "../Introduction/Introduction";
import ComputersCanvas from "../../components/Canvas/Computeur";
import Contact from "../../components/Contact/Contact";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <NavBar />

      <div id="home">
        <Septre id="Septre" />
        <span id="textTop">
          <h1>
            <h1 id="title">
              Hi, I'm <span className="nameTag">Yoav</span>
            </h1>

            <p id="presentationTop">
              Je suis un développeur Fullstack,
              <br />
              Je suis passioné de dévoloppement web !
            </p>
          </h1>
        </span>
      </div>
      <ComputersCanvas />

      <div class="introduction">
        <Introduction />
      </div>

      <div id="contact">
        <Contact/>
      </div>
    </div>
  );
};

export default Portfolio;
