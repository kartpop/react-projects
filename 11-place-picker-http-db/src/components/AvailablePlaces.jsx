import Places from "./Places.jsx";
import { useEffect, useState } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => { // avoid infinite loop: --> component --> fetch --> state change --> component...
    async function fetchPlaces() {
      setIsFetching(true);
      const response = await fetch("http://localhost:3000/places");
      const data = await response.json();
      setAvailablePlaces(data.places);
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      loadingPlacesText="Loading places..."
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
