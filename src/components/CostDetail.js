import { useState } from "react";

function CostDetail({ title, cost, id, onEdit, onRemove }) {
  const [isEdit, setIsEdit] = useState(false);
  const saveChanges = (event) => {
    toggleEdit();
    const editedTitle = event.target.parentElement.childNodes[0].value;
    const editedCost = event.target.parentElement.childNodes[1].value;
    return onEdit(id, editedTitle, editedCost);
  };

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };
  return isEdit ? (
    <div id={id}>
      <input defaultValue={title}></input>
      <input defaultValue={cost} type="number"></input>
      <button onClick={saveChanges}>save</button>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  ) : (
    <div id={id}>
      <span>{title}</span>
      <span>{cost}</span>
      <button onClick={toggleEdit}>edit</button>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  );
}
export default CostDetail;
