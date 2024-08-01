import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/products">Products</Link>
      </p>
    </div>
  );
}

export default HomePage;