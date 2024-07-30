import Places from "./Places.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import { useEffect, useState } from "react";
import { sortPlacesByDistance } from "../loc";
import { fetchAvailablePlaces } from "../http";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    // avoid infinite loop: --> component --> fetch --> state change --> component...
     async function fetchPlaces() {
      try {
        setIsFetching(true);
        
        let places = await fetchAvailablePlaces();

        // transform fetched data
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError(error);
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorComponent title="Error" message={error.message} />;
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
