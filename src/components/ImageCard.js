import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function ImageCard(props) {
  return (
    <Card className="my-2 text-center align-self-center ">
      <Card.Img
        className="rounded"
        variant="top"
        src={props.src}
        alt={props.title}
      />
      <Card.Body className="overflow-auto">
        <Card.Title>
          <a
            className="grey-color text-shadow"
            href={props.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {props.title}
          </a>
        </Card.Title>
        <Card.Text>{props.summary}</Card.Text>
        <Card.Text>Uses: {props.code}</Card.Text>
        {props.googlePlayLink && (
          <Card.Title className="mb-0">
            <a
              href={props.googlePlayLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="img-fluid play w-75 mx-auto d-block"
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              />
            </a>
          </Card.Title>
        )}
      </Card.Body>
    </Card>
  );
}

export default ImageCard;

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
};
