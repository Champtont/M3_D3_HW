import Alert from "react-bootstrap/Alert";

const WarningSign = (props) => {
  return <Alert className="alert-danger">{props.string}</Alert>;
};

export default WarningSign;
