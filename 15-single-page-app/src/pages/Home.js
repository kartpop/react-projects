import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/products");
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="products">Products</Link>
      </p>
      <p>
        <button onClick={handleClick}>Go to Products</button>
      </p>
    </div>
  );
}

export default HomePage;