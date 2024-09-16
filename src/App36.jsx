import React from "react";
import { useFetch } from "./useFetch";
export default function App36() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data] = useFetch(url);
  return (
    <div>
      {data.map((element) => (
        <div key={element.id}>{element.name}</div>
      ))}
    </div>
  );
}