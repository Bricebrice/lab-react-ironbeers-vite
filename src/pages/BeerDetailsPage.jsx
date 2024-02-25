import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BeerDetailsPage.css";

function BeerDetailsPage(props) {
  const [foundBeer, setFoundBeer] = useState(null);

  const { beerId } = useParams();
  console.log("beer id: ", beerId);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
      .then((response) => {
        setFoundBeer(response.data);
        console.log("foundBeer: ", response.data);
      })
      .catch((error) => console.log(error));
  }, [beerId]);

  return (
    <>
      {!foundBeer && <h3>You're drunk!</h3>}

      {foundBeer && (
        <div className="beer-detail-card">
          <img src={foundBeer.image_url} alt={foundBeer.name} />
          <div>
            <div className="beer-details">
              <h2>{foundBeer.name}</h2>
              <p>{foundBeer.attenuation_level}</p>
            </div>
            <div className="beer-details">
              <p>{foundBeer.tagline}</p>
              <p>{foundBeer.first_brewed}</p>
            </div>
            <p>{foundBeer.description}</p>
            <p>{foundBeer.contributed_by}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BeerDetailsPage;
