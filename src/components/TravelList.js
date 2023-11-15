import { useEffect, useState } from "react";
import Travel from "./Travel";

function TravelList({ travelList }) {
  const [getTravelList, setTravelList] = useState(travelList);
  useEffect(() => {
    setTravelList(() => {
      return travelList;
    });
  }, [travelList]);

  useEffect(() => {
    updateLocalStorage();
  }, [getTravelList]);

  const onEdit = (id, name) => {
    setTravelList((travelList) => {
      return travelList.map((plan) =>
        plan.id === id ? { ...plan, name: name } : plan
      );
    });
  };

  const onRemove = (id) => {
    setTravelList((travelList) => {
      return travelList.filter((plan) => plan.id !== id);
    });
  };
  const updateLocalStorage = () => {
    localStorage.setItem("TravelList", JSON.stringify(getTravelList));
  };
  return (
    <div>
      {getTravelList.map((destination) => {
        return (
          <Travel
            name={destination.name}
            key={destination.id}
            id={destination.id}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
}

export default TravelList;
