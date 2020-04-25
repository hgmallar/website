import React from "react";
import PropTypes from "prop-types";

const Title = (props) => (
  <div className="row justify-content-center width">
    <div id="content" className="col-md-10 bg-white">
      <h1>{props.title}</h1>
      <hr />
    </div>
  </div>
);

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
