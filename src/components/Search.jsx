import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Label, Input } from "@pega/cosmos-react-core";
import axios from "axios";

function Search() {
  // useSearchParams hook used to read and modify the query string in the URL
  const [searchParams, setSearchParams] = useSearchParams();
  // Get the values from the URL query strings
  const query = searchParams.get("q");

  const handleChange = (e) => {
    e.preventDefault();

    let params = e.target.value.toLowerCase();
    setSearchParams({ q: params });
  };

  // to log the current value of "q" param
  useEffect(() => {
    console.log("q", query);
    if (query !== "") {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers/search?q=" + query)
        .then((response) => {
          console.log("response.data: ", response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [query]);

  // I would like to clear the search on refresh :')

  return (
    <div className="search-bar">
      <Input
        type="text"
        name="search"
        value={query}
        placeholder="Search beers..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
