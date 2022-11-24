import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import history from "../data/history.json";
import fantasy from "../data/fantasy.json";

import { Form } from "react-bootstrap";
import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class MyForm extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <Container className="myForm">
        <Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </Form.Group>
        </Row>
        <Row>
          {horror
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.search)
            )
            .map((book) => (
              <SingleBook
                key={book.asin}
                asin={book.asin}
                image={book.img}
                title={book.title}
              ></SingleBook>
            ))}
        </Row>
      </Container>
    );
  }
}

export default MyForm;
