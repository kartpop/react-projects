import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description: "Learn the basics of programming",
  },
  {
    id: "e2",
    title: "Database fundamentals",
    description: "Learn the basics of databases",
  },
];

function EventsPage() {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
