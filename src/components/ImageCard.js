import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ImageCard(props) {
  const [names, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <Card className="bg-light text-white my-2 text-center">
      <a href={props.link}>
        <animated.img
          variant="top"
          src={props.src}
          alt={props.title}
          className="animated-card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: names.xys.interpolate(trans) }}
        />
      </a>
      <Card.Body className="overflow-auto">
        <Card.Title>
          <a className="text-white text-shadow" href={props.link}>
            {props.title}
          </a>
        </Card.Title>
        <Card.Text>{props.summary}</Card.Text>
        <Card.Text>Uses: {props.code}</Card.Text>
        <Card.Title>
          <a className="text-white text-shadow" href={props.codeLink}>
            (CODE)
          </a>
        </Card.Title>
        {props.googlePlayLink && (<Card.Title>
          <a href={props.googlePlayLink}>
            <img
              className="img-fluid w-25 mx-auto d-block"
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
          </a>
        </Card.Title>)}
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
