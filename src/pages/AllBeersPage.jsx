import { useState, useEffect } from "react";
import axios from "axios";
import "./AllBeersPage.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);
  const [query, setQuery] = useState("");

  const getAllBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      // console.log("response", response);
      setAllBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchedBeers = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      );
      console.log("response", response);
      setAllBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  useEffect(() => {
    getSearchedBeers();
  }, [query]);

  // new state for the search
  // new use effect to handle the api get call
  // listen for changes from the child?

  return (
    <>
      {/* <h2>List of beers</h2> */}
      <Search updateQueryFunction={setQuery} />
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
