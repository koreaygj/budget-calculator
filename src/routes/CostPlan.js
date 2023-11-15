import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CostPlanList from "../components/CostPlanList";
import styles from "./styles/CostPlan.module.css";

function CostPlan() {
  const { id } = useParams();
  const [costDetails, setCostDetails] = useState(() => {
    const savedList = JSON.parse(localStorage.getItem(`CostDetails${id}`));
    return savedList !== null ? savedList : [];
  });
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
  };
  const saveLocalStorage = () => {
    localStorage.setItem(`CostDetails${id}`, JSON.stringify(costDetails));
  };
  const deleteAll = () => {
    setCostDetails(() => []);
  };
  useEffect(() => {
    saveLocalStorage();
  }, [costDetails]);

  return (
    <div className={styles.mainView}>
      <h1 className={styles.title}>{id}</h1>
      <div className={styles.costDetailContainer}>
        <form className={styles.detailForm} onSubmit={addCostPlan}>
          <span>지출 항목</span>
          <input type="text" placeholder="ex) 교통비"></input>
          <span>지출 금액</span>
          <input type="number" placeholder="ex) 10000"></input>
          <button className={styles.submitButton}>submit</button>
        </form>
        <CostPlanList costPlans={costDetails} />
        <button className={styles.deleteButton} onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
}
export default CostPlan;
