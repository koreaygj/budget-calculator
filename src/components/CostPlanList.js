import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ConstDetail({ costPlans }) {
  const { destination } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const saveCostPlan = () => {
    setIsEdit(() => {
      return false;
    });
  };
  const editCostPlan = () => {
    setIsEdit(() => {
      return true;
    });
  };

  const deleteCostPlan = (event) => {
    const plan = event.target.parentElement();
    plan.remove();
    costPlans = costPlans.filter((costPlan) => costPlan !== parseInt(plan.id));
    saveCostPlans();
  };

  const saveCostPlans = () => {
    localStorage.setItem(destination, JSON.stringify(costPlans));
  };
  useEffect(() => {
    saveCostPlan();
  }, []);

  return (
    <div>
      {costPlans.map((costPlan) =>
        isEdit ? (
          <div id={costPlan.id} key={costPlan.id}>
            <input type="text" value={costPlan.title}></input>
            <input type="number" value={costPlan.cost}></input>
            <button onClick={saveCostPlan}>save</button>
            <button onClick={deleteCostPlan}>Delete</button>
          </div>
        ) : (
          <div id={costPlan.id} key={costPlan.id}>
            <span>{costPlan.title}</span>
            <span>{costPlan.cost}</span>
            <button onClick={editCostPlan}>edit</button>
            <button onClick={deleteCostPlan}>Delete</button>
          </div>
        )
      )}
    </div>
  );
}

export default ConstDetail;
