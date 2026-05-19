import "./Button.css";

function Button({
  text,
  onClick,
  type = "button",
  variant = "primary",
}) {
  return (
    <button
      className={`custom-btn ${variant}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;