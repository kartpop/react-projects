- Don't overuse memo()
    - use it as high up in the component tree as possible: as blocking a component execution there will also block all child component executions (more bang for buck)
    - memo() checks for prop change which can also impact performance: if the component props change frequently, the component would anyway render after prop check; the unnecessary prop checks can impact performance then
    - as with other optimizations, do it only when impact is seen, not pre-emptively

- Alternative to memo - put frequenty changing states in a separate component so only that renders frequently (eg. text input keystroke change, counter clicks etc.)

- useCallback() in conjuction with memo()
    - if the prop is a function pointer and nothing in the function dependency changes except for the fact that the parent component function re-renderes, the function pointer will get a new value; the prop value check in memo may take this as a change and may unnessarily trigger rerender of child component; therefore it would be useful to wrap the function used as prop inside useCallback to prevent function pointer value change

- useMemo() is like memo() but for any function; memo() only works with component functions

- React uses Virtual DOM
    - it first constructs the DOM in memory, compares it with previous state of DOM in memory and only makes the diff changes in actual DOM in browser
    - browser DOM changes are expensive, this strategy reduces expensive updates
    - therefore, just because a component is rerendered does not mean that the corresponding html elements in it and in all its children are actually updated in the real DOM; only the necessary ones are

- Why keys are so important?
    - React tracks state by component type and also position of that component in the component tree
    - this typically only happens when there are sibling instances nearby on the DOM (like in lists)
    - therefore React makes it compulsory to provide keys when mapping list elements
    - also for this reason, index is not a very good choice for a key: if we add or remove items from the list, the element in the list that we actually intend to be selected/highlighted/focussed on may be lost because its index changed; key should rather be a value that uniquely identifies the element (like UUID say)
    - when an index is used as key, the entire list will have to be re-rendered even on the browser DOM because the key for all elements change when we insert an element in front of the list; when using a unique key, only that single element which was recently updated needs to be rendered
    - nice side-effect/pattern: use key reset to cause a component to intentionally re-render

- React performs state batching
    - multiple state updates in a single component may not cause multiple renders of the component; instead React batches all the state updates that happen in one execution flow and renders component as few times as possible (once is the best)
    - also therefore, when we do setState using useState, that state is not available right after in the next line; setState registers a state update, but does not perform it synchronously; that is why we use the setState((previousState) => previousState + 1) sort of update when we depend on the previousState to compute the nextState