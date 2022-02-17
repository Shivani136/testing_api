import React, { useState, useEffect } from "react";
//import axios from "axios";

export default function Table() {
  const [data, setData] = useState([]);

  //Fetch Data in React Using the Fetch API
  useEffect(() => {
    fetch("http://localhost:4000/todo").then((result) => {
      result.json().then((resp) => {
          console.warn("response",resp)
       // setData(resp);
      });
    });
  }, []);
  console.warn(data);

  return (
    <div>
      <h1>This is Table</h1>
      {/* {data} */}
      <table>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {/* {
         data.map((item) => (
        <div>{item.name}</div>
      ))} */}
      </table>
    </div>
  );
}
