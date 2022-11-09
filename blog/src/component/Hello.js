import { useState } from "react";

export default function Hello() {
  const [name, setName] = useState("Mike");
  function showName() {
    alert("Mike");
  }
  function showAge(age) {
    alert(age);
  }
  function showText(txt) {
    alert(txt);
  }
  return (
    <div>
      <h2 id="name">{name}</h2>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        Change
      </button>
    </div>
  );

  // <div>
  //   <h1>Hello</h1>
  //   <button onClick={showName}>Show name</button>

  //   <button
  //     onClick={() => {
  //       showAge(21);
  //     }}
  //   >
  //     Show age
  //   </button>

  //   <input
  //     type="text"
  //     onChange={(i) => {
  //       const txt = i.target.value;
  //       showText(txt);
  //     }}
  //   />
}
