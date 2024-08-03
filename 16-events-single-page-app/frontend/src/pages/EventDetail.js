import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();

  return (
    <>
      <EventItem event={data.event}></EventItem>
    </>
  );
}

export default EventDetailPage;

export async function loader({ params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );

  if (!response.ok) {
    throw json({ message: "Failed to load event" }, { status: 500 });
  } else {
    return response;
  }
}
