import { Link } from "react-router-dom";

export default function Button({ text, to }) {
  return (
    <>
      <Link to={to}>
        <button type="button">
          <span className="button-top">{text}</span>
        </button>
      </Link>
    </>
  );
}
