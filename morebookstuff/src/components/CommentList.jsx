import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const CommentList = (props) => {
  return (
    <ListGroup>
      {props.comments.map((c) => (
        <ListGroupItem key={c.asin}>
          {c.rating} | {c.comment}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default CommentList;
