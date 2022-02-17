import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Form() {
  const [data, setData] = useState();

  //Fetch Data in React Using the Fetch API
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setData(data));
    // .then(data => console.log(data));
    // console.log(data); infinite loop
  }, []);

  // Fetch Data in React Using Axios
  useEffect(() => {
    axios("https://randomuser.me/api/")
    .then((response) => {setData(response.data);
    });
    //.then(response=> {console.log(response.data)})
  }, []);

  // Fetch Data in React Using async / await syntax

  useEffect(() => {
    getData();
  }, [data]);

  async function getData() {
    await axios("https://randomuser.me/api/")
      .then((response) => {setData(response.data)})
     // .then((response) => {console.log(response.data); });
  }
  return (
    <div>
      {/* <h1>this is form</h1> */}
      {/* {
      data.map((results) => (
        <div>{results.name}</div>
      ))} */}
    </div>
  );
}
