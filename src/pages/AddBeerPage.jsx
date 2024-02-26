import { useState } from "react";
import axios from "axios";

import React from "react";
import { Button, Input, Label, TextArea } from "@pega/cosmos-react-core";

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
      <h3 style={{ textAlign: "center" }}>Add new beer</h3>

      <form onSubmit={handleSubmit}>
        <Label>Name</Label>
        {/* <input
          type="text"
          name="name"
          value={name} // give value to make sure it's updated after submit
          onChange={(e) => setName(e.target.value)}
        /> */}
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Enter beer name"
          onChange={(e) => setName(e.target.value)}
        />
        <Label>Tagline</Label>
        <Input
          type="text"
          name="tagline"
          value={tagline}
          placeholder="Enter tagline"
          onChange={(e) => setTagline(e.target.value)}
        />
        <Label>Description</Label>
        <TextArea
          type="text"
          name="description"
          value={description}
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Label>First Brewed</Label>
        <Input
          type="text"
          name="first_brewed"
          value={firstBrewed}
          placeholder="Enter date"
          onChange={(e) => setFirstBrewed(e.target.value)}
        />
        <Label>Brewer's Tips</Label>
        <Input
          type="text"
          name="brewers_tips"
          value={brewersTips}
          placeholder="Enter brewer's tips"
          onChange={(e) => setBrewerTips(e.target.value)}
        />
        <Label>Attenuation Level</Label>
        <Input
          type="number"
          name="attenuation_level"
          value={attenuationLevel}
          placeholder="Enter number"
          min="0" // to avoid user to enter negative value
          onChange={(e) => setAttenuationLevel(e.target.value)}
        />
        <Label>Contributed By</Label>
        <Input
          type="text"
          name="contributed_by"
          value={contributedBy}
          placeholder="Enter contributor's name"
          onChange={(e) => setContributedBy(e.target.value)}
        />
        <Button type="submit" variant="primary" compact={false}>
          Add beer
        </Button>{" "}
      </form>
    </>
  );
}

export default AddBeerPage;
