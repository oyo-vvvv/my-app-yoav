import React, { useRef, useEffect } from "react";
import "./Card.css";
import VanillaTilt from "vanilla-tilt";
import devWeb from '../../assets/card/web-0d05165f.png'
import reactNative from '../../assets/card/mobile-896ef2f5.png'
import backend from '../../assets/card/backend-565fc01f.png'
import entrep from '../../assets/card/creator-dbbffaec.png'

const Card = () => {
    useEffect(() => {
      const tiltElements = document.querySelectorAll("[data-tilt]");
      tiltElements.forEach((element) => {
        VanillaTilt.init(element);
      });
    }, []);
  
    return (
      <section id="card">
        <div id="cardDiv">
          <div className="cards" data-tilt data-tilt-scale="1.1">
            <div className="cardsStyle">
              <div className="cardsIn">
                <img
                  src={devWeb}  width="64" height="64"
                  alt="web-developement"
                  className="w-16 h-16 object-contain"
                />
                <h3>Développeur Web</h3>
              </div>
            </div>
          </div>
          <div className="cards" data-tilt data-tilt-scale="1.1">
            <div className="cardsStyle">
              <div className="cardsIn">
                <img
                  src={reactNative}  width="64" height="64"
                  alt="react-nativ-developement"
                  className="w-16 h-16 object-contain"
                />
                <h3>Développeur React</h3>
              </div>
            </div>
          </div>
          <div className="cards" data-tilt data-tilt-scale="1.1">
            <div className="cardsStyle">
              <div className="cardsIn">
                <img
                 src={backend}  width="64" height="64"
                  alt="web-developement"
                  className="w-16 h-16 object-contain"
                />
                <h3>Développeur Backend</h3>
              </div>
            </div>
          </div>
          <div className="cards" data-tilt data-tilt-scale="1.1">
            <div className="cardsStyle">
              <div className="cardsIn">
                <img
                  src={entrep}  width="64" height="64"
                  alt="web-developement"
                  className="w-16 h-16 object-contain"
                />
                <h3>Volleyeur Pro</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Card;