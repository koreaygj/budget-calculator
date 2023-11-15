import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CostPlanList from "../components/CostPlanList";

function CostPlan() {
  const { id } = useParams();
  const [costDetails, setCostDetails] = useState(() => {
    const savedList = JSON.parse(localStorage.getItem("CostDetails"));
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
    localStorage.setItem("CostDetails", JSON.stringify(costDetails));
  };
  useEffect(() => {
    saveLocalStorage();
  }, [costDetails]);

  return (
    <div>
      <h1>{id}</h1>
      <div>
        <form onSubmit={addCostPlan}>
          <span>지출 항목</span>
          <input type="text" placeholder="ex) 교통비"></input>
          <span>지출 금액</span>
          <input type="number" placeholder="ex) 10000"></input>
          <button>submit</button>
        </form>
        <CostPlanList costPlans={costDetails} />
      </div>
    </div>
  );
}
export default CostPlan;
