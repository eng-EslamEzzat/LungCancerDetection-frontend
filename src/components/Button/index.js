import "./button.css";

export default function Button({clickHandler}) {
  return <button type="button" onClick={clickHandler}>Start Detection</button>;
}
