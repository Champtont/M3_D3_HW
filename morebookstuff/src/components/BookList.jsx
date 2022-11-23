import horror from "../data/horror.json";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const Booklist = () => {
  return (
    <Container>
      <Row>
        {horror.slice(0, 6).map((book) => (
          <SingleBook
            key={book.asin}
            image={book.img}
            title={book.title}
          ></SingleBook>
        ))}
      </Row>
    </Container>
  );
};
export default Booklist;
