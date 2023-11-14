import { useEffect, useState } from "react";

function Travel({ destination, key }) {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [getTitle, setTitle] = useState("");
  const savedLocalStorage = JSON.parse(localStorage.getItem("TravelList"));
  const editTitle = () => {
    setIsEdit((prev) => !prev);
  };
  const saveTitle = () => {
    setIsEdit((prev) => !prev);
  };
  const saveDestination = () => {
    localStorage.setItem("TravelList", JSON.stringify(savedLocalStorage));
  };
  const deleteTitle = (event) => {
    const div = event.target.parentElement;
    setIsDelete(() => {
      return true;
    });

    const updateLocalStorage = savedLocalStorage.filter(
      (destination) => destination !== div.id
    );
    saveDestination(updateLocalStorage);
  };
  useEffect(() => {
    setTitle(() => destination);
  }, []);
  return isEdit ? (
    <div id={getTitle} key={key} hidden={isDelete}>
      <input type="text" value={getTitle}></input>
      <button onClick={saveTitle}>save</button>
      <button onClick={deleteTitle}>delete</button>
    </div>
  ) : (
    <div id={getTitle} key={key} hidden={isDelete}>
      <a href={`/travel/${getTitle}`}>{getTitle}</a>
      <button onClick={editTitle}>edit</button>
      <button onClick={deleteTitle}>delete</button>
    </div>
  );
}

export default Travel;
