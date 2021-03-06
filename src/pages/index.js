import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info from "../components/info"
import { Helmet } from "react-helmet"
import previousPath from "../../gatsby-browser"

function index() {
  
  return (
    <div>
      <Appbar />
      <Info />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nate Voigt</title>
      </Helmet>
    </div>
  )
}

export default index
