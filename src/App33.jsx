import React from "react";
import { useRef } from "react";
export default function App33() {
  const h1Ref = useRef(null);
  const updateH1 = () => {
    h1Ref.current.textContent = "Good Evening";
  };
  return (
    <div>
      <h1 ref={h1Ref}>Good Morning</h1>
      <button onClick={updateH1}>Click</button>
    </div>
  );
}