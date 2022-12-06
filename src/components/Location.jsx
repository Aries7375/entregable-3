import React from "react";
import { useState } from "react";
import getLocation from "../hooks/getLocation";
import getName from "../hooks/getName";
import ResidentCard from "./ResidentCard";

const Location = () => {
  const [world, setWorld] = useState(
    `https://rickandmortyapi.com/api/location/${Math.trunc(
      Math.random() * (127 - 1) + 1
    )}`
  );
  const locationInput = getLocation(world, world);
  const residents = locationInput?.residents;
  const names = getName();
  const change = (e) => {
    e.preventDefault();
    setWorld(
      `https://rickandmortyapi.com/api/location/?name=${e.target.locName.value}`
    );
    e.target.reset();
  };
  return (
    <div>
      <div className="img-input">
        <form onSubmit={change}>
          <input
            id="locName"
            type="search"
            name="location"
            list="listNames"
            placeholder="Type a location id"
          />
          <input type="submit" value="Search" className="btn" />
        </form>
        <datalist id="listNames">
          {names?.map((name) => (
            <option value={name} key={name}></option>
          ))}
        </datalist>
      </div>
      <div className="location-info-cont">
        <div className="location-info">
          <h1>{locationInput?.name}</h1>
          <div className="location-info-data">
            <div>
              <span>Type</span>
              <p>{locationInput?.type}</p>
            </div>
            <div>
              <span>Dimension</span>
              <p>{locationInput?.dimension}</p>
            </div>
            <div>
              <span>Population</span>
              <p>{locationInput?.residents.length}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="residents-cont">
        {residents?.map((resident) => (
          <ResidentCard
            key={resident?.slice(42, resident?.length)}
            resident={resident}
          />
        ))}
      </div>
    </div>
  );
};

export default Location;
