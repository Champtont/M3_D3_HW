import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Booklist from "./components/BookList";
import CommentArea from "./components/CommentArea";
import MyFooter from "./components/MyFooter";
import MyForm from "./components/MyForm";
import MyNav from "./components/MyNav";
import WarningSign from "./components/WarningSign";

class App extends Component {
  state = {
    selected: "",
  };

  alterState = (update) => {
    this.setState({
      selected: update,
    });
  };

  render() {
    return (
      <div className="App">
        <MyNav></MyNav>
        <Container>
          <Row>
            <Col md={8}>
              <Booklist
                selectedvalue={this.state.selected}
                alterState={this.alterState}
              />
              <WarningSign string="This is an alert!!!"></WarningSign>
            </Col>
            <Col md={4} style={{ marginTop: "5em" }}>
              {/*
              props:{
                asin:this.state.selected
              }
               */}
              <CommentArea asin={this.state.selected} />
            </Col>
          </Row>
        </Container>
        <MyFooter></MyFooter>
      </div>
    );
  }
}

export default App;
