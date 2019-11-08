import React from "react"

import {
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#260339" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Nate Voigt.
      </div>
      <div className="h1 mt-5">
        
        <a className="mr-5 icon" href="https://github.com/voigtnathan">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto://voigtnathan23@gmail.com">
          <Mail />
        </a>
        <a className="mr-5 icon" href="https://www.linkedin.com/in/nate-voigt-42b2b111a">
          <FaLinkedin/>
        </a>
      </div>
      <div className="h1 code mt-4 mb-3">aboutMe = {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
      <p>Nate Voigt: A software engineer with experience in full stack software engineering, digital marketing, and SEO & pagespeed optimization. 
      Nate's love of problem-solving has shaped his path and he enjoys being challenged by his work. Continuously looking for new challenges has lead Nate to join a couple different development teams over the last 4 years and develop several mobile first web applications. 
      When he's not working Nate enjoys traveling to new places and strong Italian espresso. </p></div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
     
    </div>
  )
}
