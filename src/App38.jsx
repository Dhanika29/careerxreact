import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { count: state };
  }
}

export default function App38() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  function decrement() {
    dispatch({ type: "decrement" });
  }
  function increment() {
    dispatch({ type: "increment" });
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      {state.count}
      <button onClick={increment}>+</button>
    </div>
  );
}