import React, { Component } from "react";
import { Card } from "react-bootstrap";

class ImageCard extends Component {
  render() {
    return (
      <div className="col-sm-5 col-lg-3 mx-auto">
        <Card className="bg-light text-white my-2 text-center">
          <a href={this.props.src}>
            <Card.Img
              variant="top"
              src={this.props.src}
              alt={this.props.title}
            />
          </a>
          <Card.Body className="overflow-auto">
            <Card.Title >
              <a className="text-white " href={this.props.link}>
                {this.props.title}
              </a>
            </Card.Title>
            <Card.Text>{this.props.summary}</Card.Text>
            <Card.Text>Uses: {this.props.code}</Card.Text>
            <Card.Title>
              <a className="text-white" href={this.props.codeLink}>
                (CODE)
              </a>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ImageCard;
