import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialData) {
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialData);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setFetchedData(places);
      } catch (error) {
        setError(
          { message: error.message } || {
            message: "An error occurred fetching user places.",
          }
        );
      }
      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return { isFetching, error, fetchedData, setFetchedData };
}
