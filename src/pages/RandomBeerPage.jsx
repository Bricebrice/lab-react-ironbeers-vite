import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BeerCard from "./BeerCard";

function RandomBeersPage() {
  const [foundBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
        console.log("random beer is: ", response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // reload the page on click to get another random beer
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      <button onClick={handleReload} className="btn-round">
        Reload
      </button>
      {!foundBeer && <h3>You're drunk!</h3>}

      {foundBeer && <BeerCard beer={foundBeer} />}
    </>
  );
}

export default RandomBeersPage;
