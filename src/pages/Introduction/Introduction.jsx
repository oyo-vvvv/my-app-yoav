import React from "react";
import "./Introduction.css";
import Card from "../../components/Card/Card"


const Introduction = () => {
  return (
    <section id="introductionSection">
      <div>
        <p id="introApercu">Introduction</p>
        <h2 id="titleMid">Aperçu.</h2>
      </div>
      <p id="midText">
        Je suis un développeur de logiciels compétent avec une expérience en
        Visual Studio Code et JavaScript, et une expertise dans des frameworks tels que
        React et Node.js. Je suis capable d'apprendre rapidement et je
        collabore étroitement avec les clients pour créer des solutions
        efficaces, évolutives et conviviales qui résolvent des problèmes réels.
        Travaillons ensemble pour donner vie à vos idées !
      </p>

      <Card/>
    </section>
  );
};

export default Introduction;
