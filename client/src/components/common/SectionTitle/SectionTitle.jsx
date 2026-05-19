import "./SectionTitle.css";

function SectionTitle({ subtitle, title, description, center }) {
  return (
    <div className={`section-title ${center ? "center" : ""}`}>
      <span>{subtitle}</span>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

export default SectionTitle;