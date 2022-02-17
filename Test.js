import React, { useState, useEffect } from "react";

export default function Test() {
  const [src, setSrc] = useState("");
  const [list, setList] = useState(null);

  const getImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setSrc(data.message);
    console.log(data);
  };

  const getImageByBreed = async (breed) => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const data = await response.json();
    setSrc(data.message);
    console.log(data);
  };

  const listBreed = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    return Object.keys(data.message); // object constructor keys
  };

  useEffect(() => {
    async function fetchData() {
      const breeds = await listBreed();
      setList(
        breeds.map((breed) => (
          <button onClick={(e) => getImageByBreed(breed)}>{breed}</button>
        ))
      );
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>hello Dogs</h1>

      <button onClick={(e) => getImage()}> GET IMAGE </button>
      <div>
        <img src={src} alt=""></img>
      </div>
      <div>{list}</div>
    </div>
  );
}
