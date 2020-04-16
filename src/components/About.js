import React from "react";
import Header from "./Header.js";
import Title from "./Title.js";

function About(props) {
  return (
    <div id="container">
      <Header page="about"/>
      <Title title={props.title} />
      <div className="row justify-content-center">
        <div id="content" className="col-md-10 bg-white">
          <ul className="lead hex">
            <li>
              Full-stack web developer and experienced verification engineer
              with additional background as a high school math and computer
              science teacher.
            </li>
            <li>
              Excellent debug and problem solving skills from over 15 years of
              programming experience.
            </li>
            <li>
              Experience in web development technologies like HTML, CSS,
              Javascript, jQuery, Node, React.js, Express, MySQL, and MongoDB,
              as well as Java, C, and C++.
            </li>
            <li>
              Established attention to detail and strong communication skills
              through most recent position as a remote math editor.
            </li>
            <li>
              Honed extreme organization and patience working as a teacher, a
              tutor, and a parent.
            </li>
            <li>Passionate about helping others and improving efficiency.</li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
