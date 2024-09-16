import React from "react";
import { useEffect, useState } from "react";
export default function App34() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {data.map((element) => (
        <div key={element.id}>{element.name}-{element.email}</div>
      ))}
    </div>
  );
}