import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import history from "../data/history.json";
import fantasy from "../data/fantasy.json";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const Booklist = (props) => {
  return (
    <Container className="mt-5">
      <h2>Horror</h2>
      <Row>
        {horror.slice(0, 6).map((book) => (
          <SingleBook
            setSelectedBook={props.alterState}
            key={book.asin}
            asin={book.asin}
            image={book.img}
            title={book.title}
            color="red"
            subtext="New Scare"
          ></SingleBook>
        ))}
      </Row>
      <h2>Romance</h2>
      <Row>
        {romance.slice(0, 6).map((book) => (
          <SingleBook
            setSelectedBook={props.alterState}
            key={book.asin}
            asin={book.asin}
            image={book.img}
            title={book.title}
            color="pink"
            subtext="Fall In Love"
          ></SingleBook>
        ))}
      </Row>
      <h2>Sci-Fi</h2>
      <Row>
        {scifi.slice(0, 6).map((book) => (
          <SingleBook
            setSelectedBook={props.alterState}
            asin={book.asin}
            key={book.asin}
            image={book.img}
            title={book.title}
            color="green"
            subtext="Other Worldly"
          ></SingleBook>
        ))}
      </Row>
      <h2>History</h2>
      <Row>
        {history.slice(0, 6).map((book) => (
          <SingleBook
            setSelectedBook={props.alterState}
            key={book.asin}
            asin={book.asin}
            image={book.img}
            title={book.title}
            color="gold"
            subtext="Study Up"
          ></SingleBook>
        ))}
      </Row>
      <h2>Fantasy</h2>
      <Row>
        {fantasy.slice(0, 6).map((book) => (
          <SingleBook
            setSelectedBook={props.alterState}
            key={book.asin}
            asin={book.asin}
            image={book.img}
            title={book.title}
            color="orange"
            subtext="Ready For Adventure"
          ></SingleBook>
        ))}
      </Row>
    </Container>
  );
};
export default Booklist;
