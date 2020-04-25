import React from "react";
import PropTypes from "prop-types";
import Header from "./Header.js";
import Title from "./Title.js";
import baby from "./../images/baby.PNG";
import foodTruck from "./../images/food-truck.png";
import youthRally from "./../images/frontpage.PNG";
import ticTacToe from "./../images/gamepage.PNG";
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
        code="React.js, SQL, Express, Node, Sequelize, HTML, Flexbox,
                  FontAwesome, and Google Fonts. Responsive Bootstrap design."
        codeLink="https://github.com/hgmallar/uncommonBaby"
      />

      <ImageCard
        title="Youth Rally"
        src={youthRally}
        link="https://www.youthrally.org/"
        summary="React web application for non-profit with custom store."
        code="Node, Express, React.js, HTML, CSS, Javascript,
            FontAwesome, and Google Fonts styling. Responsive Bootstrap
            design."
        codeLink="https://github.com/hgmallar/youth-rally"
      />

      <ImageCard
        title="Food Truck Map"
        src={foodTruck}
        link="https://evening-brushlands-53491.herokuapp.com/"
        summary="A group project, full stack React web application to
            communicate in real time between food trucks and customers."
        code="React.js, Mongo, Express, Node, Passport, Mongoose,
            Axios, Socket.io, HTML, Flexbox, and Leaflet. Responsive
            design."
        codeLink="https://github.com/hgmallar/WMFA"
      />

      <ImageCard
        title="Tic Tac Toe"
        src={ticTacToe}
        link="https://infinite-taiga-34074.herokuapp.com/"
        summary="A group project, full stack tic tac toe web application that
            tracks user scores in a database."
        code="Socket.io, MySQL, Node, Express, Handlebars, Sequelize,
            Javascript, jQuery, Chart.js, HTML, and CSS. Responsive
            Flexbox design."
        codeLink="https://github.com/hgmallar/project2"
      />
    </div>
  </div>
);

export default Portfolio;

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
};
