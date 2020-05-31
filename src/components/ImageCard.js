import React, { Link } from "react";
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
      <Link to={props.link}>
        <animated.img
          variant="top"
          src={props.src}
          alt={props.title}
          className="animated-card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: names.xys.interpolate(trans) }}
        />
      </Link>
      <Card.Body className="overflow-auto">
        <Card.Title>
          <Link className="text-white text-shadow" to={props.link}>
            {props.title}
          </Link>
        </Card.Title>
        <Card.Text>{props.summary}</Card.Text>
        <Card.Text>Uses: {props.code}</Card.Text>
        <Card.Title>
          <Link className="text-white text-shadow" to={props.codeLink}>
            (CODE)
          </Link>
        </Card.Title>
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
