import "../src/style.css";
import React, { useState, useEffect } from "react";
import Test from "./Test";
import Form from "./Form";
import Table from "./Table";

export default function App() {
  const [name, setName] = useState("abcd");
  const [data, setData] = useState(null);
  // const age = "21";

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => setData(data))
    //.then((response) => console.log(response));
  }, [data]);

  return (
    <div className="App">
      <Test />
      <Form />
      <Table />
      {/* {
        data.map(results => {
        <p>{results.name}</p>
      })
      } */}
      {/* <p>{age}</p>

      <p>{name}</p>
      <button onClick={() => setName()}> show </button> */}

    </div>
  );
}
