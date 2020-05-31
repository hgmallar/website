import React, { Link } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import resume from "./../documents/HilaryMallar_Resume.pdf";

const Footer = () => (
  <footer className="footer">
    <Link to={resume} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFile} size="lg" className="font-awesome mx-1" />
    </Link>
    <Link to="https://www.linkedin.com/in/hilarymallar/">
      <FontAwesomeIcon
        icon={faLinkedin}
        size="lg"
        className="font-awesome mx-1"
      />
    </Link>
    <Link to="https://github.com/hgmallar">
      <FontAwesomeIcon
        icon={faGithub}
        size="lg"
        className="font-awesome mx-1"
      />
    </Link>
  </footer>
);

export default Footer;
