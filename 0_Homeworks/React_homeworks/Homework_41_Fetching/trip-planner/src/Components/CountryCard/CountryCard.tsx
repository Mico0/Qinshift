import "./CountryCard.css";

interface CountryCardProps {
  image: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
}

function CountryCard({ image, title, description, style }: CountryCardProps) {
  return (
    <div className="CountryCard" style={{ ...style }}>
      <img src={image} alt={title} />

      <div className="CountryCard__content">
        <p className="CountryCard__title">{title}</p>
        <p className="CountryCard__description">{description}</p>
      </div>
    </div>
  );
}

export default CountryCard;
