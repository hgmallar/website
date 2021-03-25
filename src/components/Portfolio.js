import React from "react";
import PropTypes from "prop-types";
import Header from "./Header.js";
import Title from "./Title.js";
import baby from "./../images/baby.PNG";
import babyApp from "./../images/babyApp.PNG";
import integerApp from "./../images/IntegerTiles.PNG";
import tiles from "./../images/tiles.PNG";
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
        code="React.js, React Native, Chart.js, SQL, Node, Express, Axios, Sequelize, Javascript, HTML, CSS, Flexbox,
                  FontAwesome, and Google Fonts. Responsive Bootstrap design."
        codeLink="https://github.com/hgmallar/uncommonBaby"
      />

      <ImageCard
        title="Unpopular Baby App"
        src={babyApp}
        link="https://play.google.com/store/apps/details?id=com.unpopularbabyapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        summary="Android App to search for names using popularity by decade and/or letter placements."
        code="React Native"
        googlePlayLink="https://play.google.com/store/apps/details?id=com.unpopularbabyapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      />

      <ImageCard
        title="Integer Operations with Tiles"
        src={tiles}
        link="https://www.integertiles.com/"
        summary="React web application to practice integer operations using manipulatives."
        code="React.js, React Native, React Native Web, Javascript, HTML, and CSS."
        codeLink="https://github.com/hgmallar/integerTilesWeb"
      />

      <ImageCard
        title="Integer Operations with Tiles App"
        src={integerApp}
        link="https://play.google.com/store/apps/details?id=com.integertiles&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        summary="Android App to practice integer operations using manipulatives."
        code="React Native with Redux"
        googlePlayLink="https://play.google.com/store/apps/details?id=com.integertiles&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
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
