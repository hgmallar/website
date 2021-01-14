import React from "react";
import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Header from "./Header.js";
import Title from "./Title.js";

const TextInput = styled.input`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.error ? "#464646" : "white")};
  color: ${(props) => (props.error ? "white" : "#495057")};
`;

const TextArea = styled.textarea`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.error ? "#464646" : "white")};
  color: ${(props) => (props.error ? "white" : "#495057")};
`;

const Contact = (props) => {
  const [name, setName] = useState("");
  const [nameErrorText, setNameErrorText] = useState("");
  const [email, setEmail] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [comments, setComments] = useState("");
  const [commentsErrorText, setCommentsErrorText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //do error checking
    if (
      !name.match(/^[a-z ,.'-]+$/i) ||
      !email.match(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      ) ||
      !comments
    ) {
      //set error text
      if (!name.match(/^[a-z ,.'-]+$/i)) {
        setNameErrorText("Invalid name");
      } else {
        setNameErrorText("");
      }
      if (
        !email.match(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        )
      ) {
        setEmailErrorText("Invalid email");
      } else {
        setEmailErrorText("");
      }
      if (!comments) {
        setCommentsErrorText("Comments are required");
      } else {
        setCommentsErrorText("");
      }
    } else {
      const data = `name=${name}&email=${email}&reason=HILARY'S HOMEPAGE CONTACT&comments=${comments}`;
      fetch("https://www.unpopularbaby.com/api/send", {
        body: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
      });
      setName("");
      setNameErrorText("");
      setEmail("");
      setEmailErrorText("");
      setComments("");
      setCommentsErrorText("");
    }
  };

  return (
    <div id="container">
      <Header page="contact" />
      <Title title={props.title} />
      <form className="contact">
        <div className="row justify-content-center width mx-auto">
          <div id="content" className="col-md-10 bg-white">
            <div className="form-group">
              <label className="d-block">
                Name:
                <TextInput
                  type="name"
                  className="form-control"
                  id="inputName"
                  aria-describedby="nameHelp"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  error={nameErrorText}
                />
                <small id="nameHelp" className="form-text text-muted">
                  {nameErrorText}
                </small>
              </label>
            </div>
            <div className="form-group">
              <label className="d-block">
                Email address:
                <TextInput
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  error={emailErrorText}
                />
                <small id="emailHelp" className="form-text text-muted">
                  {emailErrorText}
                </small>
              </label>
            </div>
            <div className="form-group">
              <label className="d-block">
                Comments:
                <TextArea
                  type="text"
                  className="form-control"
                  id="inputComments"
                  aria-describedby="commentsHelp"
                  placeholder="Enter comments"
                  rows={5}
                  value={comments}
                  onChange={(e) => {
                    setComments(e.target.value);
                  }}
                  error={commentsErrorText}
                />
                <small id="commentsHelp" className="form-text text-muted">
                  {commentsErrorText}
                </small>
              </label>
            </div>
            <div className="row mx-auto">
              <button
                type="submit"
                className="mx-auto btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  title: PropTypes.string.isRequired,
};
