## Events - Single Page App

### Notes
 
- When using `loader` inside `createBrowserRouter`, React Router executes the `loader` just before the corresponding root page is rendered (in our case, the `Events` page). Therefore if data is fetched from backend, there might be a slight delay before the `Events` page loads - complete with all data. Without using React Router, one would allow the UI elements to render first on screen and load data asynchronously. 