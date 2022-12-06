import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const getLocation = (URL, param) => {
  const [location, setLocation] = useState();
  useEffect(() => {
    axios
      .get(URL)
      .then((res) =>
        setLocation(URL.includes("name") ? res.data.results[0] : res.data)
      )
      .catch((err) => console.log(err));
  }, [param]);
  return location;
};

export default getLocation;
