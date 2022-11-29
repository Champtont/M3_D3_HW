import { Component } from "react";
import CommentList from "./CommentList";
import { Form, Button, ListGroup, ListGroupItem } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNmRhMWQ4MzkzNTAwMTVlOGM0YjMiLCJpYXQiOjE2NjkyOTU1MjEsImV4cCI6MTY3MDUwNTEyMX0.O07X0AO6LDCV-aK_i7jNi5hS15ebCuwYvCVl6Y1I-Qo",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ comments: data });
      } else {
        console.log("error fetching the comments :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (this.props.asin !== prevProps.asin) {
      this.fetchComments(this.props.asin);
      console.log("fired");
    }
  }
  render() {
    return (
      <div style={{ position: "relative" }}>
        <div style={{ position: "fixed", top: "100px" }}>
          <ListGroup>
            {this.state.comments.map((c) => (
              <ListGroupItem
                key={c._id}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {c.comment} | rated: {c.rate}
                <Button variant="danger" type="delete">
                  Delete
                </Button>
              </ListGroupItem>
            ))}
          </ListGroup>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Leave a Comment</Form.Label>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Give Rating</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" className="mr-2">
              Post
            </Button>
            <Button variant="success" type="edit" className="mr-2">
              Edit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default CommentArea;
