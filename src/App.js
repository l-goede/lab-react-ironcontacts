import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  let firstContacts = contacts.slice(0, 5);
  const [celeb, setCeleb] = useState(firstContacts);

  function handleDelete(id) {
    let filteredCelebs = celeb.filter((elem) => {
      return elem.id !== id;
    });
    setCeleb(filteredCelebs);
  }

  function handleAdd() {
    let randomElem =
      firstContacts[Math.floor(Math.random() * firstContacts.length)];
    setCeleb([randomElem, ...firstContacts]);
  }
  function handleSortName() {
    let cloneName = JSON.parse(JSON.stringify(celeb));
    cloneName.sort((first, second) => {
      if (first.name > second.name) {
        return 1;
      } else if (first.name < second.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setCeleb(cloneName);
  }

  function handleSortPopularity() {
    let clonePopularity = JSON.parse(JSON.stringify(celeb));
    clonePopularity.sort((first, second) => {
      if (first.popularity > second.popularity) {
        return -1;
      } else if (first.popularity < second.popularity) {
        return 1;
      } else {
        return 0;
      }
    });
    setCeleb(clonePopularity);
  }

  return (
    <div>
      <h1>Ironcontacts</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSortName}>Sort Name</button>
      <button onClick={handleSortPopularity}>Sort Popularity</button>
      {celeb.map((elem, index) => {
        return (
          <div key={`${elem.id}${index}`}>
            <ul>
              <li>
                <img src={elem.pictureUrl} alt="" />
              </li>
              <li>{elem.name}</li>
              <li>{elem.popularity}</li>
              <li>{elem.wonOscar === true && "🏆"}</li>
              <li>{elem.wonEmmy === true && "🏆"}</li>
            </ul>
            <button
              onClick={() => {
                handleDelete(elem.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default App;
