export default function InterestCard({interest}) {
  return (
    <div
      className="interest-card"
      style={{
        backgroundImage: `url(${interest.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="interest-overlay">
        <div className="card-header">
          <h3>{interest.name}</h3>
        </div>
        <p>{interest.description}</p>
      </div>
    </div>
  );
}
