import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  function addPuppy() {
    const newPup = { ...puppyList[0] };
    newPup.id = puppyList[puppyList.length - 1].id + 1;
    newPup.name = "Sir Waddington's Brother";
    newPup.age = 7;
    const newList = [...puppies, newPup];
    setPuppies(newList)
    setIsButtonClicked(true)
  }
  function removePuppy() {
    const newList = puppies.slice(0, -1);
    setPuppies(newList);
    if (featPupId === puppies[puppies.length - 1].id) {
      setFeatPupId(null);
    }
    setIsButtonClicked(false);
  }

const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  return (
    <>
      <div className="App">
        <div id="side">
          <div id="sep">
              <h1 id="header">List of Pups</h1>
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {setFeatPupId(puppy.id);}}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
          </div>
        {featPupId && (
        <div id="featPup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
            </div>
          )} 
          </div>
        {!isButtonClicked && (
          <button onClick={addPuppy} className="addButton">
            Add Puppy
          </button>
        )}
        {isButtonClicked && (
          <button onClick={removePuppy} className="removeButton">Undo</button>
        )}
      </div>
    </>
  );
}

export default App;
