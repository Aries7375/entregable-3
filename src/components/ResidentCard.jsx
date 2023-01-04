import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ResidentCard = ({ resident }) => {
  const [citizen, setCitizen] = useState();
  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setCitizen(res.data))
      .catch((err) => console.log(err));
  }, []);
  // const episodes = citizen?.episode;
  // const getEpisodes = (array) => {
  //   const episodes = array?.map((number) => number.slice(40, 42) + " ");
  //   return episodes;
  // };
  // const episodeData = (id) => {
  //   if (id == 1 || id == 2) return "All Episodes";
  //   if (id == 3 || id == 4 || id == 5) return "Almost Every Episode";
  //   return getEpisodes(episodes);
  // };
  const status = (data) => {
    const staColor = {};
    if (data == "Alive") staColor.background = "#4ab648";
    if (data == "Dead") staColor.background = "#B94343";
    if (data == "unknown") staColor.background = "#938686";
    return staColor;
  };
  const isId = (id) => {
    const obj = {};
    if (id == 461 || id == 315 || id == 399) obj.fontSize = "1.3rem";
    if (id == 157 || id == 214 || id == 758) obj.fontSize = "1rem";
    if (id == 222 || id == 370) obj.fontSize = "1.2rem";
    if (id == 269 || id == 670 || id == 671) obj.fontSize = "1.1rem";
    if (id == 595 || id == 596) obj.fontSize = "1rem";
    return obj;
  };
  const func = (loc) => {
    const obj = {};
    if (loc == "Earth (Evil Rick's Target Dimension)") obj.fontSize = "1.3rem";
    if (loc == "Earth (Fascist Teddy Bear Dimension)") obj.fontSize = "1.2rem";
    if (loc == "Earth (Giant Telepathic Spiders Dimension)")
      obj.fontSize = "1.1rem";
    return obj;
  };
  return (
    <article className="citizen-card">
      <img src={citizen?.image} alt="" />
      <div className="citizen-data">
        <div className="citizen-name">
          <p style={isId(citizen?.id)}>{citizen?.name}</p>
        </div>
        <div>
          <span>Specie</span>
          <p>{citizen?.species}</p>
        </div>
        <div>
          <span>Origin</span>
          <p style={func(citizen?.origin.name)}>{citizen?.origin.name}</p>
        </div>
        <div>
          <span>Nº of Episodes</span>
          <p>
            {/* {episodeData(citizen?.id)} */}
            {/* {citizen?.id == 1 || citizen?.id == 2 ? "All" : getEpisodes(episodes)} */}
            {citizen?.episode.length}
          </p>
        </div>
        <div className="citizen-status">
          <div className="status-color" style={status(citizen?.status)}></div>
          <p>{citizen?.status}</p>
        </div>
      </div>
    </article>
  );
};

export default ResidentCard;
