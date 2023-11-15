import { useState } from "react";
import styles from "./styles/CostDetails.module.css";

function CostDetail({ title, cost, id, onEdit, onRemove }) {
  const [isEdit, setIsEdit] = useState(false);
  const saveChanges = (event) => {
    toggleEdit();
    const editedTitle =
      event.target.parentElement.parentElement.childNodes[0].value;
    const editedCost =
      event.target.parentElement.parentElement.childNodes[1].value;
    return onEdit(id, editedTitle, editedCost);
  };

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };
  return isEdit ? (
    <div className={styles.editCostDetail} id={id}>
      <input defaultValue={title}></input>
      <input defaultValue={cost} type="number"></input>
      <div>
        <button onClick={saveChanges}>Save</button>
        <button onClick={() => onRemove(id)}>Delete</button>
      </div>
    </div>
  ) : (
    <div className={styles.costDetail} id={id}>
      <span>{title}</span>
      <span>{cost}</span>
      <div>
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={() => onRemove(id)}>Delete</button>
      </div>
    </div>
  );
}
export default CostDetail;
