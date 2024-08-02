## React Router

### Notes

- The `Link` element's `to` prop expects a string. If a `product.id` is of type int, the following will not work ```<Link to={product.id}>```, but the following will ```<Link to={`${product.id}`}>```. In the latter, we correctly use a template literal to convert the int to a string before passing it.

- **Route vs Path**: The way we have defined our routes,

```
  {
    path: "/root",  
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },  
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  }
```

both `products` and `products/:productId` have the same parent `/root`. This can have side-effects. The `Link` element uses `relative='route'` prop value by default. Therefore if we have a link like `<Link to="..">Back</Link>` in the page corresponding to path `/root/products/some-product-id`, then the `Back` link will navigate us back to the `/root` page because that is the parent. If we instead want path based navigation, we should put `<Link to=".." relative='path'>Back</Link>`. We explicitly set `relative='path'` prop so that the link will navigate using path structure and not route structure. 