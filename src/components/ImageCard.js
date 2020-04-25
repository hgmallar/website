import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const ImageCard = (props) => (
  <Card className="bg-light text-white my-2 text-center">
    <a href={props.src}>
      <Card.Img variant="top" src={props.src} alt={props.title} />
    </a>
    <Card.Body className="overflow-auto">
      <Card.Title>
        <a className="text-white " href={props.link}>
          {props.title}
        </a>
      </Card.Title>
      <Card.Text>{props.summary}</Card.Text>
      <Card.Text>Uses: {props.code}</Card.Text>
      <Card.Title>
        <a className="text-white" href={props.codeLink}>
          (CODE)
        </a>
      </Card.Title>
    </Card.Body>
  </Card>
);

export default ImageCard;

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
};
