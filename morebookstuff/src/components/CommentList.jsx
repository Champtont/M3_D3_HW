import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class CommentList extends Component {
  state = {
    comments: [],
  };

  fetchComments = async (id) => {
    //const token = "";
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
        // everything looks ok :)
        let data = await response.json();
        console.log(data);
        // data is the array of reservations we're getting back from the API
        this.setState({
          comments: data,
        });
      } else {
        console.log("error fetching the comments :(");
        // server reached, but it encountered a problem with our request
      }
    } catch (error) {
      console.log(error);
      // this error happens when you're not able at all to reach the server...
      // (internet problem?)
    }
  };

  componentDidMount() {
    this.fetchComments(this.props.asin);
  }

  render() {
    return (
      <ListGroup>
        {this.props.selected?.comments.map((c) => (
          <ListGroupItem key={c.asin}>
            {c.rating} | {c.comment}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;
