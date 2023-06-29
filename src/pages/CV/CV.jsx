import React from "react";
import NavBar from '../../components/NavBar/NavBar'
import pp from "../../assets/img/pp.jpg";
import webSchool from "../../assets/img/WebschoolLogo-PNG.png";
import "./CV.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const CV = () => {
  return (
    <div>
      <NavBar/>
      <header id="cvHeader">
        
        <span id="topLeft">
          <img src={pp} alt="yoav" id="profilPic" />
          <h1>Cartozo Yoav</h1>
          <h4>Fullstack Developer</h4>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="cvIcon" />
            Marseille, France
          </p>
        </span>
        <div id="topRight">
          <p>
            Developpeur Fullstack avec 6 mois d'expérience dans la conception,
            le développement et la gestion de sites e-commerce, et autres,
            d'applications dans le domaine du voyage, d'applications pour des
            restaurateurs et des projets personnels. Spécialisé dans React,
            Redux, JavaScript, HTML, CSS, NodeJS, SQL et Python.
          </p>
          <br />
          <a href="https://www.linkedin.com/in/yoav-cartozo/">
            <FontAwesomeIcon icon={faLinkedin} className="cvLinks" />
          </a>
          <a href="https://github.com/oyo-vvvv">
            <FontAwesomeIcon icon={faGithub} className="cvLinks" />
          </a>
          <p>+33 6 14 14 13 57</p>
          <p>cartozoy1@gmail.com</p>
        </div>
      </header>
      <section id="cvSection">
        <h2 id="titleSection">Education</h2>
        <h4 className="cvDate">2022 - 2023</h4>
        <br />
        <h3 className="cvWork">
          Webschool{" "}
          <a href="https://www.webschool.co.il/">
            <img src={webSchool} alt="webSchoolLogo" id="webSchool" />
          </a>
        </h3>
        <br />
        <p>Formation de developpeur fullstack</p>
        <br />

        <hr />
        <br />

        <h4 className="cvDate">2016 - 2020</h4>
        <br />
        <h3 className="cvWork">Lycée Thiers Marseille 13001</h3>
        <br />
        <p>Baccalauréat Scientifique Français (option mathématiques)</p>
      </section>

      <footer id="cvFooter">
        <h2 id="titleFooter">Compétences</h2>
        <div className="cvColumn">
          <h3>Technologie</h3>
          <hr />
          <ul>
            <li>React, Hooks</li>
            <li>Javascript</li>
            <li>NodeJs</li>
            <li>Html</li>
            <li>CSS</li>
            <li>Python</li>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="cvColumn">
          <h3>Librairie</h3>
          <hr />
          <ul>
            <li>Redux</li>
            <li>react-i18next</li>
            <li>React Hook Form</li>
            <li>Formik</li>
            <li>Material UI</li>
            <li>React Router</li>
          </ul>
        </div>
        <div className="cvColumn">
          <h3>Langues</h3>
          <hr />
          <ul>
            <li>Français</li>
            <li>Anglais</li>
            <li>Russe</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default CV;
