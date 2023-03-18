import { bgStyle, textStyle } from "../utils/formatter";
function Summary(props) {
  const styles = {
    background: bgStyle(props.category),
    borderRadius: "0.5rem",
  };
  const textStyles = {
    color: textStyle(props.category),
  };
  return (
    <li className="listscore" style={styles}>
      <img src={props.path} alt="" aria-hidden />
      <p style={textStyles}> {props.category}</p>
      {props.score} <span className="grayout"> / 100</span>
    </li>
  );
}

export default Summary;
