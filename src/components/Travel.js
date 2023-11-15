import { useState } from "react";

function Travel({ name, id, onEdit, onRemove }) {
  const [isEdit, setIsEdit] = useState(false);
  const saveChanges = (event) => {
    toggleEdit();
    const editedName = event.target.parentElement.childNodes[0].value;
    return onEdit(id, editedName);
  };

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };
  return isEdit ? (
    <div id={id}>
      <input defaultValue={name}></input>
      <button onClick={saveChanges}>save</button>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  ) : (
    <div id={id}>
      <a href={`./travel/${name}`}>{name}</a>
      <button onClick={toggleEdit}>edit</button>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  );
}

export default Travel;
