import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Header.jsx";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchEvent, deleteEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["event-details", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  const {
    mutate,
    isPending: isPendingDelete,
    isError: isErrorDelete,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  function handleDelete() {
    mutate({ id: params.id });
  }

  function handleIsDeleting() {
    setIsDeleting(true);
  }

  function handleCancelDelete() {
    setIsDeleting(false);
  }

  let content;

  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <p>Fetching event data...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          title="An error occurred"
          message={error.info?.message || "Failed to fetch event"}
        />
      </div>
    );
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    content = (
      <>
        {isDeleting && (
          <Modal onClose={handleCancelDelete}>
            <h1>Are you sure?</h1>
            <p>This event cannot be recovered once deleted.</p>
            {isPendingDelete && <p>Deleting event...</p>}
            {!isPendingDelete && (
              <div className="form-actions">
                <button onClick={handleCancelDelete} className="button-text">
                  Cancel
                </button>
                <button onClick={handleDelete} className="button">
                  Delete
                </button>
              </div>
            )}
            {isErrorDelete && (
              <ErrorBlock
                title="Failed to delete event"
                message={deleteError.info?.message}
              />
            )}
          </Modal>
        )}
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleIsDeleting}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {formattedDate} @ {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
