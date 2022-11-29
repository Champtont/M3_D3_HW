import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import MyBadge from "./MyBadge";

class SingleBook extends Component {
  render() {
    return (
      <Col xs={12} md={4} className="text-center mb-3">
        <Card
          className="myCards"
          style={{
            boxShadow: "black 0px 0px 15px",
          }}
          asin={this.props.asin}
        >
          <MyBadge
            color={this.props.color}
            subtext={this.props.subtext}
          ></MyBadge>
          <Card.Img
            variant="top"
            src={this.props.image}
            style={{ height: "300px" }}
            onClick={() => {
              this.props.setSelectedBook(this.props.asin);
            }}
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
