import React from "react";
import PropTypes from "prop-types";
import Header from "./Header.js";
import Title from "./Title.js";
import baby from "./../images/baby.PNG";
import youthRally from "./../images/frontpage.PNG";
import voteGeorgia from "./../images/georgia.PNG";
import ImageCard from "./ImageCard";

const Portfolio = (props) => (
  <div id="container">
    <Header page="portfolio" />
    <Title title={props.title} />
    <div className="portfolio-grid">
      <ImageCard
        title="Unpopular Baby"
        src={baby}
        link="https://www.unpopularbaby.com/"
        summary="Full stack React web application to search for names using
                  popularity by decade and/or letter placements."
        code="React.js, Chart.js, SQL, Node, Express, Axios, Sequelize, HTML, Flexbox,
                  FontAwesome, and Google Fonts. Responsive Bootstrap design."
        codeLink="https://github.com/hgmallar/uncommonBaby"
      />

      <ImageCard
        title="Youth Rally"
        src={youthRally}
        link="https://www.youthrally.org/"
        summary="React web application for non-profit with custom store."
        code="React.js, HTML, CSS, Javascript,
            FontAwesome, and Google Fonts styling. Responsive Bootstrap
            design."
        codeLink="https://github.com/hgmallar/youth-rally"
      />

      <ImageCard
        title="How To Vote Georgia"
        src={voteGeorgia}
        link="https://howtovotegeorgia.com/"
        summary="Non-partisan, independent Full stack React web application to help voters get clear, concise and up-to-date information on voting in the Georgia runoff."
        code="React.js, Node, Express, Axios, HTML, CSS, and Javascript. Responsive Material UI
            design."
        codeLink="https://github.com/hgmallar/georgia"
      />
    </div>
  </div>
);

export default Portfolio;

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
};
