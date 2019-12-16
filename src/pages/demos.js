import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { Helmet } from "react-helmet"
import TextContrast from "../components/textcontrast";

function Demos() {

  return (
    <div className="container-fluid">
      <Appbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Sumanth</title>
      </Helmet>
      <div id="row">
        <TextContrast />
      </div>
    </div>
  )
}

export default Demos;