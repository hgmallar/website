import React, { Link } from "react";
import PropTypes from "prop-types";
import Header from "./Header.js";
import Title from "./Title.js";
import resume from "./../documents/HilaryMallar_Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => (
  <div id="container">
    <Header page="contact" />
    <Title title={props.title} />
    <div className="row justify-content-center width">
      <div id="content" className="col-md-10 bg-white">
        <p className="text-center">
          <span className="font-weight-bold">email: </span>
          <Link className="contact" to="mailto:hilarymallar@gmail.com">
            hilarymallar@gmail.com
          </Link>
        </p>
        <p className="text-center">
          <span className="font-weight-bold">phone: </span>(315) 254-8151
        </p>
        <p className="text-center">
          <Link
            className="contact"
            to={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFile} size="lg" className="mr-1" />
            Resume
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default Contact;

Contact.propTypes = {
  title: PropTypes.string.isRequired,
};
