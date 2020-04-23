import React from "react";
import Header from "./Header.js";
import Title from "./Title.js";
import resume from "./../documents/HilaryMallar_Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
  return (
    <div id="container">
      <Header page="contact"/>
      <Title title={props.title} />
      <div className="row justify-content-center width">
        <div id="content" className="col-md-10 bg-white">
          <p className="text-center">
            <span className="font-weight-bold">email: </span>
            <a className="contact" href="mailto:hilarymallar@gmail.com">
              hilarymallar@gmail.com
            </a>
          </p>
          <p className="text-center">
            <span className="font-weight-bold">phone: </span>(315) 254-8151
          </p>
          <p className="text-center">
            <a
              className="contact"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFile}
                size="lg"
                className="mr-1"
              />
              Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
