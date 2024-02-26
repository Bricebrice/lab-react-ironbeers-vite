function BeerCard({ beer }) {
  return (
    <div className="beer-detail-card">
      <img src={beer.image_url} alt={beer.name} />
      <div>
        <div className="beer-details">
          <h2>{beer.name}</h2>
          <p>{beer.attenuation_level}</p>
        </div>
        <div className="beer-details">
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
        </div>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerCard;
