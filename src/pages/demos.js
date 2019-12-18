import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { Helmet } from "react-helmet"
import TextContrast from "../components/textcontrast";
import WorldClocks from "../components/WorldClocks";

function Demos() {

  return (
    <div className="container-fluid">
      <Appbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Demos</title>
      </Helmet>
      <div id="row">
        <h3 id="demos">Detect Correct Text Contrast Using Neural Network</h3>
        <TextContrast />
      </div>
      <div id="row">
        <h3 id="demos">Synchronized World Clocks</h3>
        <WorldClocks />
      </div>
    </div>
  )
}

export default Demos;