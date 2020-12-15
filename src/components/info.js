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
       Hi there! I'm Nate Voigt.
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
      <p>Nate Voigt:    A software engineer with experience in full stack software engineering and digital strategy. 
        I have worked on multiple apps of varying scale and function; from responsive portfolios to peer-to-peer marketplace web applications. 
        I believe in streamlined development that focuses on scalability, clean coding practices, and intuitive user experiences.  </p>
        <p>Skills:   [ HTML, Stripe APi, Google Javascript API's, Vimeo API, CSS,
                        Node.Js, jQuery, Git, Express.js, React.js, Redux,
                        Redux Sagas, Liquid, Material-UI, Semantic-UI, JavaScript,
                        Axios, PostgreSQL, SQL ]
</p></div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
     
    </div>
  )
}
