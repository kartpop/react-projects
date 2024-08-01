Redux Cart


### Notes

- We can seemingly mutate state inside redux reducers using redux toolkit, but this is just syntactic sugar. Redux toolkit uses a third party package (immer) to expand out state mutation - make deep copies of current state, make changes on the copy, replace the entire current redux state with new state. 

- Trade-off between thin client, fat server and fat client, thin server. In this project, we use Firebase only as pure database (thin server), therefore all logic will reside in front-end.

- Redux Reducers must be **pure, side-effect free, synchronous** functions. Therefore tasks like http requests should not be present inside redux reducers. They should either be inside components (useEffect()) or preferably inside **action creators**.

    ![Where-should-logic-go](./images/where-should-logic-go.png)

    - Option1: First update state in front-end, then send updated state to database using http request. Use fat reducer for cart logic, subscribe to cart changes in any component (say root level App.js), send http request with useEffect(). 

    - Option2: Use action creator thunk - a function that delays an action until later. **Thunk** is an action creator function that **does NOT return the action itself** but instead returns **a function which eventually returns the action**.