import { Link } from "react-router-dom";

function ProductsPage() {
  const PRODUCTS = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  const PRODUCTS2 = [
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
  ];

  return (
    <>
      <h1>The Products page</h1>
      <p>
        These links will work, because the product.id which is an int is
        converted to a string by using template literal.
      </p>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <p>
        These links will not work, because the product.id which is an int is
        passed direclty to the 'to' prop of Link element. React Router expects a
        string, so it will not work.
      </p>
      <ul>
        {PRODUCTS2.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
