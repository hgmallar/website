import React from "react";

function Title(props) {
  return (
    <div className="row justify-content-center width">
      <div id="content" className="col-md-10 bg-white">
        <h1>{props.title}</h1>
        <hr />
      </div>
    </div>
  );
}

export default Title;
