import { useState } from "react";
import { useParams } from "react-router-dom";
import CostPlanList from "../components/CostPlanList";

function CostPlan() {
  const { id } = useParams();
  const [costDetails, setCostDetails] = useState([]);
  const addCostPlan = (event) => {
    event.preventDefault();
    const costPlan = {
      id: Date.now(),
      title: event.target[0].value,
      cost: event.target[1].value,
    };
    setCostDetails((prev) => [...prev, costPlan]);
  };

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
