import React from "react";
import "../style.css";
import Appbar from "../components/appbar";
import { Helmet } from "react-helmet";
import TextContrast from "../components/textcontrast";
import Game from '../components/Game';
// import WorldClocks from "../components/WorldClocks";

function Demos() {

  return (
    <div className="container-fluid">
      <Appbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Demos</title>
      </Helmet>
      <div id="row">
        <h3 id="demos">2048 Game in React!</h3>
        <Game />
      </div>
      <div id="row">
        <h3 id="demos">Detect Correct Text Contrast Using Neural Network</h3>
        <TextContrast />
      </div>
    </div>
  )
}

export default Demos;