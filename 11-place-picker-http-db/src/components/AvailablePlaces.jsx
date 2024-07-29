import Places from "./Places.jsx";
import { useEffect, useState } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => { // avoid infinite loop: --> component --> fetch --> state change --> component...
    fetch("http://localhost:3000/places")
      .then((response) => response.json())
      .then((data) => setAvailablePlaces(data.places));
  }, []);

  return (
    <Places
      title="Available Places"
      places={[]}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
