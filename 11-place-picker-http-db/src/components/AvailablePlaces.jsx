import Places from "./Places.jsx";
import { useEffect, useState } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => { // avoid infinite loop: --> component --> fetch --> state change --> component...
    async function fetchPlaces() {
      const response = await fetch("http://localhost:3000/places");
      const data = await response.json();
      setAvailablePlaces(data.places);
    }

    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
