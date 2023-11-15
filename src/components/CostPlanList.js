import { useEffect, useState } from "react";
import CostDetail from "./CostDetail";

function ConstDetail({ costPlans }) {
  const [getCostPlans, setCostPlans] = useState(costPlans);
  useEffect(() => {
    setCostPlans(() => costPlans);
  }, [costPlans]);

  useEffect(() => {
    updateLocalStorage();
  }, [getCostPlans]);

  const onEdit = (id, title, cost) => {
    setCostPlans((costPlans) => {
      return costPlans.map((costPlan) =>
        costPlan.id === id
          ? { ...costPlan, title: title, cost: cost }
          : costPlan
      );
    });
  };

  const onRemove = (id) => {
    setCostPlans((costPlans) => {
      return costPlans.filter((costPlan) => costPlan.id !== id);
    });
  };
  const updateLocalStorage = () => {
    localStorage.setItem("CostDetails", JSON.stringify(getCostPlans));
  };

  return (
    <div>
      {getCostPlans.map((costPlan) => {
        return (
          <CostDetail
            title={costPlan.title}
            cost={costPlan.cost}
            key={costPlan.id}
            id={costPlan.id}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
}

export default ConstDetail;
