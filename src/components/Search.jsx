import { Label, Input } from "@pega/cosmos-react-core";
import { useState } from "react";

function Search({ updateQueryFunction }) {
  const [searchString, setSearchString] = useState("");

  const handleChange = (e) => {
    setSearchString(e.target.value);
    updateQueryFunction(e.target.value);
  };

  return (
    <div className="search-bar">
      <Input
        type="text"
        name="search"
        value={searchString}
        placeholder="Search beers..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
