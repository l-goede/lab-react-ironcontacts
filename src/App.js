import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  let firstContacts = contacts.slice(0, 5);
  const [celeb, setCeleb] = useState(firstContacts);

  function handleAdd() {
    let randomElem =
      firstContacts[Math.floor(Math.random() * firstContacts.length)];
    setCeleb([randomElem, ...firstContacts]);
  }
  return (
    <div>
      <h1>Ironcontacts</h1>
      <button onClick={handleAdd}>Add</button>
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
          </div>
        );
      })}
    </div>
  );
}
export default App;
