import Badge from "react-bootstrap/Badge";

const MyBadge = (props) => {
  return (
    <Badge
      className="badge"
      style={{ backgroundColor: props.color, color: "white" }}
    >
      {props.subtext}
    </Badge>
  );
};

export default MyBadge;
