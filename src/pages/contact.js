import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
// import { graphql } from "gatsby"
// import Card from "../components/card"
import { Helmet } from "react-helmet"

function Contact() {

    return (
        <div className="container-fluid">
            <Appbar />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Projects | Past</title>
            </Helmet>
            <div id="contact">
            <form name="contact" method="post" action="/" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <br/>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <br/>
                    <textarea name="message" id="message" rows="6" />
                </div>
                <ul className="actions">
                    <li>
                        <input type="submit" value="Send Message" className="special" />
                    </li>
                    <li>
                        <input type="reset" value="Clear" />
                    </li>
                </ul>
            </form>
            </div>
        </div>
    )
}

export default Contact