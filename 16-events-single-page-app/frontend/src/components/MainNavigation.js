import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* absolute path is intentional - always want to go to the root */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* absolute path is intentional - always want to go to the root --> events */}
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
