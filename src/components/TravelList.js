import { useEffect, useState } from "react";
import Travel from "./Travel";

function TravelList({ travelList }) {
  const [getTravelList, setTravelList] = useState(travelList);
  useEffect(() => {
    setTravelList(() => {
      return travelList;
    });
  }, [travelList]);
  return (
    <div>
      {getTravelList.map((destination) => {
        return (
          <Travel
            name={destination.name}
            key={destination.id}
            id={destination.id}
          />
        );
      })}
    </div>
  );
}

export default TravelList;
