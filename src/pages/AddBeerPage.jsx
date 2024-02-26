import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewerTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };
    console.log("body: ", body);

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewerTips("");
        setAttenuationLevel(0);
        setContributedBy("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h3>Add new beer</h3>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name} // give value to make sure it's updated after submit
          onChange={(e) => setName(e.target.value)}
        />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={firstBrewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />

        <label>Brewer's Tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={brewersTips}
          onChange={(e) => setBrewerTips(e.target.value)}
        />

        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          min="0" // to avoid user to enter negative value
          value={attenuationLevel}
          onChange={(e) => setAttenuationLevel(e.target.value)}
        />

        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          value={contributedBy}
          onChange={(e) => setContributedBy(e.target.value)}
        />

        <button type="submit">Add Beer</button>
      </form>
    </>
  );
}

export default AddBeerPage;
