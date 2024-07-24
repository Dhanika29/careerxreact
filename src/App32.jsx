import React from "react";
import { useRef } from "react";
export default function App32() {
  const inputRef = useRef(null);
  const updateText = (value) => {
    inputRef.current.value = value;
  };
  return (
    <div>
      <input ref={inputRef} type="text"></input>
      <p>
        <button onClick={() => updateText("Red")}>Red</button>
        <button onClick={() => updateText("Green")}>Green</button>
      </p>
    </div>
  );
}