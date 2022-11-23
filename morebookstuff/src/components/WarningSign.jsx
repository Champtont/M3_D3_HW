import Alert from "react-bootstrap";

const WarningSign = (props) => {
  return <Alert className="danger">{props.string}</Alert>;
};

export default WarningSign;
