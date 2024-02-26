import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BeerDetailsPage.css";
import { Link } from "react-router-dom";
import BeerCard from "../components/BeerCard";

function BeerDetailsPage() {
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
      <br />
      <Link to="/beers" style={{ textAlign: "center" }}>
        Back
      </Link>
      {!foundBeer && <h3>You're drunk!</h3>}

      {foundBeer && <BeerCard beer={foundBeer} />}
    </>
  );
}

export default BeerDetailsPage;
