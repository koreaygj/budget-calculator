import { useState } from "react";

function Travel({ name, id }) {
  const [getName, setName] = useState(name);
  const savedList = JSON.parse(localStorage.getItem("TravelList"));
  const [isEdit, setIsEdit] = useState(false);
  const saveChanges = (event) => {
    toggleEdit();
    const editedName = event.target.parentElement.childNodes[0].value;
    setName(() => editedName);
    savedList.map((destination) => {
      if (destination.id === id) {
        destination.name = editedName;
      }
    });
    updateLocalStorage();
  };
  const updateLocalStorage = () => {
    localStorage.setItem("TravelList", JSON.stringify(savedList));
  };
  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };
  return isEdit ? (
    <div id={id}>
      <input defaultValue={getName}></input>
      <button onClick={saveChanges}>save</button>
      <button>Delete</button>
    </div>
  ) : (
    <div>
      <a href={`./travel/${getName}`}>{getName}</a>
      <button onClick={toggleEdit}>edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Travel;
