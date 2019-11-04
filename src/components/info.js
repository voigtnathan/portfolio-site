import React from "react"

import {
  FaGithub as Github,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#260339" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Nate Voigt.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Passionate Full Stack Software Engineer, Backend developer, and Digital Strategist.
        <br /> Solving the world's problems with coffee in one hand while typing with the other.
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        
        <a className="mr-5 icon" href="https://github.com/voigtnathan">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto://voigtnathan23@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
