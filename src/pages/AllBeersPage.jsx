import { useState, useEffect } from "react";
import axios from "axios";
import "./AllBeersPage.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log("response.data ", response.data);
        setAllBeers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* <h2>List of beers</h2> */}
      <Search />
      <div className="beers-wrapper">
        {allBeers.map((beer) => (
          <Link key={beer._id} to={`/beers/${beer._id}`} className="beer-card">
            <img src={beer.image_url} alt={beer.name} />
            <div>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p className="created-by">
                <strong>Created by: </strong>
                {beer.contributed_by}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default AllBeersPage;
