import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CostPlanList from "../components/CostPlanList";
import styles from "./styles/CostPlan.module.css";
import AlertMsg from "../components/AlertMsg";

function CostPlan() {
  const { id } = useParams();
  const [alert, setAlert] = useState({
    show: false,
    message: "",
  });
  const [costDetails, setCostDetails] = useState(() => {
    const savedList = JSON.parse(localStorage.getItem(`CostDetails${id}`));
    return savedList !== null ? savedList : [];
  });

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

  const addCostPlan = (event) => {
    event.preventDefault();
    costPlan(event.target[0].value, event.target[1].value);
  };

  const costPlan = (title, cost) => {
    const costPlan = {
      id: Date.now(),
      title: title,
      cost: cost,
    };
    setCostDetails((prev) => [...prev, costPlan]);
    showAlert("추가");
  };
  const saveLocalStorage = () => {
    localStorage.setItem(`CostDetails${id}`, JSON.stringify(costDetails));
  };
  const deleteAll = () => {
    setCostDetails(() => []);
    showAlert("모든 항목 삭제");
  };
  useEffect(() => {
    saveLocalStorage();
  }, [costDetails]);

  return (
    <div className={styles.mainView}>
      <h1 className={styles.title}>{id}</h1>
      {alert.show && <AlertMsg message={alert.message} />}
      <div className={styles.costDetailContainer}>
        <form className={styles.detailForm} onSubmit={addCostPlan}>
          <span>지출 항목</span>
          <input type="text" placeholder="ex) 교통비"></input>
          <span>지출 금액</span>
          <input type="number" placeholder="ex) 10000"></input>
          <button className={styles.submitButton}>submit</button>
        </form>
        <CostPlanList costPlans={costDetails} onChange={onChange} />
        <button className={styles.deleteButton} onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
}
export default CostPlan;
