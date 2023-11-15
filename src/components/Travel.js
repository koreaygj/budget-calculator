import { useState } from "react";
import styles from "./styles/TravelList.module.css";

function Travel({ name, id, onEdit, onRemove }) {
  const [isEdit, setIsEdit] = useState(false);
  const saveChanges = (event) => {
    toggleEdit();
    const editedName =
      event.target.parentElement.parentElement.childNodes[0].value;
    return onEdit(id, editedName);
  };
  const showPlanDetail = () => {
    window.open(`./travel/${name}`);
  };

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };
  return isEdit ? (
    <div className={styles.editTravelList} id={id}>
      <input defaultValue={name}></input>
      <div>
        <button onClick={saveChanges}>Save</button>
        <button onClick={() => onRemove(id)}>Delete</button>
      </div>
    </div>
  ) : (
    <div className={styles.travelList} id={id}>
      <span onClick={showPlanDetail}>{name}</span>
      <div>
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={() => onRemove(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Travel;
