Redux Cart


### Notes

- We can seemingly mutate state inside redux reducers using redux toolkit, but this is just syntactic sugar. Redux toolkit uses a third party package (immer) to expand out state mutation - make deep copies of current state, make changes on the copy, replace the entire current redux state with new state. 

- Redux Reducers must be **pure, side-effect free, synchronous** functions. Therefore tasks like http requests should not be present inside redux reducers. They should either be inside components (useEffect()) or preferably inside **action creators**.

    ![Where-should-logic-go](./images/where-should-logic-go.png)