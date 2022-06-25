import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";
import baby from "./../images/baby.PNG";
import babyApp from "./../images/babyApp.PNG";
import integerApp from "./../images/IntegerTiles.PNG";
import tiles from "./../images/tiles.PNG";
import youthRally from "./../images/frontpage.PNG";
import ImageCard from "./ImageCard";

const cards = [
  {
    title: "Unpopular Baby",
    src: baby,
    link: "https://www.unpopularbaby.com/",
    summary:
      "Full stack React web application to search for names using popularity by decade and/or letter placements.",
    code: "React.js, React Native, Chart.js, SQL, Node, Express, Axios, Sequelize, Javascript, HTML, CSS, Flexbox, FontAwesome, and Google Fonts. Responsive Bootstrap design.",
    googlePlayLink: "",
  },
  {
    title: "Unpopular Baby App",
    src: babyApp,
    link: "https://play.google.com/store/apps/details?id=com.unpopularbabyapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
    summary:
      "Android App to search for names using popularity by decade and/or letter placements.",
    code: "React Native",
    googlePlayLink:
      "https://play.google.com/store/apps/details?id=com.unpopularbabyapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
  },
  {
    title: "Integer Operations with Tiles",
    src: tiles,
    link: "https://www.integertiles.com/",
    summary:
      "React web application to practice integer operations using manipulatives.",
    code: "React.js, React Native, React Native Web, Javascript, HTML, and CSS.",
    googlePlayLink: "",
  },
  {
    title: "Integer Operations with Tiles App",
    src: integerApp,
    link: "https://play.google.com/store/apps/details?id=com.integertiles&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
    summary: "Android App to practice integer operations using manipulatives.",
    code: "React Native with Redux",
    googlePlayLink:
      "https://play.google.com/store/apps/details?id=com.integertiles&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
  },
  {
    title: "Youth Rally",
    src: youthRally,
    link: "https://www.youthrally.org/",
    summary: "React web application for non-profit with custom store.",
    code: "React.js, HTML, CSS, Javascript, FontAwesome, and Google Fonts styling. Responsive Bootstrap design.",
    googlePlayLink: "",
  },
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
          backgroundImage: "none",
        }}
      >
        <ImageCard
          title={cards[i].title}
          src={cards[i].src}
          link={cards[i].link}
          summary={cards[i].summary}
          code={cards[i].code}
          googlePlayLink={cards[i].googlePlayLink}
        />
      </animated.div>
    </animated.div>
  ));
}

export default Deck;
