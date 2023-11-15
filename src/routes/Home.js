import { useEffect, useState } from "react";
import TravelList from "../components/TravelList";
import styles from "./styles/Home.module.css";

function Home() {
  const [travelList, setTravelList] = useState(() => {
    const savedList = JSON.parse(localStorage.getItem("TravelList"));
    return savedList !== null ? savedList : [];
  });
  const addTravelPlan = (event) => {
    event.preventDefault();
    newDestination(event.target[0].value);
    event.target[0].value = "";
  };
  const newDestination = (getName) => {
    const destination = {
      id: Date.now(),
      name: getName,
    };
    setTravelList((prev) => [...prev, destination]);
  };
  const saveLocalStorage = () => {
    localStorage.setItem("TravelList", JSON.stringify(travelList));
  };
  const deleteAll = () => {
    setTravelList(() => []);
  };
  useEffect(() => {
    saveLocalStorage();
  }, [travelList]);
  return (
    <div className={styles.mainView}>
      <h1 className={styles.title}>Travel List</h1>
      <div className={styles.travelContainer}>
        <form className={styles.travelForm} onSubmit={addTravelPlan}>
          <input
            className={styles.inputField}
            required
            type="text"
            placeholder="insert travel destination"
          ></input>
          <button className={styles.submitButton}>submit</button>
        </form>
        <TravelList travelList={travelList} />
        <button className={styles.deleteButton} onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
}

export default Home;
