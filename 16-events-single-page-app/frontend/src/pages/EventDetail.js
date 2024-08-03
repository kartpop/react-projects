import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

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

export async function action({ request, params }) {
  const eventId = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    return json({ message: "Failed to delete event" }, { status: 500 });
  }

  return redirect("/events");
}
