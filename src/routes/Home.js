import { useEffect, useState } from "react";
import TravelList from "../components/TravelList";
import styles from "./styles/Home.module.css";
import AlertMsg from "../components/AlertMsg";

function Home() {
  const [alert, setAlert] = useState({
    show: false,
    message: "",
  });
  const [travelList, setTravelList] = useState([]);

  const showAlert = (message) => {
    setAlert({
      show: true,
      message: `성공적으로 ${message} 되었습니다.`,
    });
    setTimeout(() => setAlert({ show: false, message: "" }), 1000);
  };

  const onChange = (message) => {
    showAlert(message);
  };

  const addTravelPlan = (event) => {
    event.preventDefault();
    newDestination(event.target[0].value);
    event.target[0].value = "";
    showAlert("add");
    console.log(travelList);
  };
  const newDestination = (getName) => {
    getLocalStorage();
    const destination = {
      id: Date.now(),
      name: getName,
    };
    setTravelList((prev) => [...prev, destination]);
  };

  const getLocalStorage = () => {
    setTravelList(JSON.parse(localStorage.getItem("TravelList")));
  };
  const saveLocalStorage = () => {
    localStorage.setItem("TravelList", JSON.stringify(travelList));
  };
  const deleteAll = () => {
    setTravelList(() => []);
    showAlert("모든 항목 삭제");
  };
  useEffect(() => {
    saveLocalStorage();
  }, [travelList]);
  useEffect(() => {
    getLocalStorage();
  }, []);
  return (
    <div className={styles.mainView}>
      <h1 className={styles.title}>Travel List</h1>
      {alert.show && <AlertMsg message={alert.message} />}
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
        <TravelList travelList={travelList} onChange={onChange} />
        <button className={styles.deleteButton} onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
}

export default Home;
