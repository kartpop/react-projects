import Places from "./Places.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import { useEffect, useState } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    // avoid infinite loop: --> component --> fetch --> state change --> component...
    async function fetchPlaces() {
      try {
        setIsFetching(true);
        const response = await fetch("http://localhost:3000/placesss");
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Could not fetch places.");
        }

        setAvailablePlaces(data.places);
      } catch (error) {
        setError(error);
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return (
      <ErrorComponent title="Error" message={error.message} />
    );
  }
  
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
