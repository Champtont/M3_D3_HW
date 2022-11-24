import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import MyBadge from "./MyBadge";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={12} md={4} className="text-center mb-3">
        <Card
          className="myCards"
          style={{
            boxShadow: "black 0px 0px 15px",
            transform: this.state.selected ? "scale(1.03)" : "none",
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
            style={{ height: "450px" }}
            onClick={() => {
              console.log("clicked", this.props.asin);
              this.setState({
                selected: !this.state.selected,
              });
            }}
          />
          <Card.Body>
            <Card.Title className="text-truncate">
              {this.props.title}
            </Card.Title>
          </Card.Body>
          {this.state.selected && <CommentArea></CommentArea>}
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
