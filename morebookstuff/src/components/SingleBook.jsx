import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import MyBadge from "./MyBadge";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={12} md={4} className="text-center mb-3">
        <Card className="myCards" style={{ boxShadow: "black 0px 0px 15px" }}>
          <MyBadge color="red" subtext="New Scare"></MyBadge>
          <Card.Img
            variant="top"
            src={this.props.image}
            style={{ height: "450px" }}
          />
          <Card.Body>
            <Card.Title className="text-truncate">
              {this.props.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
