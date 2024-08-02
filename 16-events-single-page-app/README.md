## Events - Single Page App

### Notes
 
- When using `loader` inside `createBrowserRouter`, React Router executes the `loader` just before the corresponding root page is rendered (in our case, the `Events` page). Therefore if data is fetched from backend, there might be a slight delay before the `Events` page loads - complete with all data. Without using React Router, one would allow the UI elements to render first on screen and load data asynchronously.
    - One way of showing loading message: use `react-router-dom`'s `navigation.state` (`idle`, `loading`, `submitting`) to determine if we want to show the loading message. This should be done in a root component though like RootLayout in our case which is already rendered (not in the component which will use the asynchronously fetched data).

- React Router `loader` cannot use hooks (useState, useEffect etc.) as they are not part of React components. But as they execute in the browser, they can use all other browser builtin functions (navigator, browser cache etc.)