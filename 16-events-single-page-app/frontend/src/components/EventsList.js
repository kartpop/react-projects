import { Link } from 'react-router-dom';
import classes from './EventsList.module.css';

function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            {/* We must provide absolute path to the Link component now as relative path will fail. 
            Events list is now loaded on two different pages/routes */}
            <Link to={`/events/${event.id}`}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link >
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
