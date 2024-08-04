import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  json,
  redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.entries(data.errors).map(([err, value]) => (
            <li key={err}>{value}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const data = await request.formData();
  const method = request.method;

  const eventData = {
    title: data.get("title"),
    description: data.get("description"),
    date: data.get("date"),
    image: data.get("image"),
  };

  let url = "http://localhost:8080/events";
  if (method === "PATCH") {
    const eventId = params.eventId;
    url = `http://localhost:8080/events/${eventId}`;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    return json({ message: "Failed to create event" }, { status: 500 });
  }

  return redirect("/events");
}
