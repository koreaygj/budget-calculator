import { useEffect, useState } from "react";
import Travel from "../components/Travel";

function Home() {
  const [travelList, setTravelList] = useState([]);
  const addTravelPlan = (event) => {
    event.preventDefault();
    setTravelList((prev) => [...prev, event.target[0].value]);
    saveTravelList();
  };
  const saveTravelList = () => {
    localStorage.setItem("TravelList", JSON.stringify(travelList));
  };
  useEffect(() => {
    const savedTravelList = JSON.parse(localStorage.getItem("TravelList"));
    setTravelList(() => {
      return savedTravelList;
    });
  }, []);
  return (
    <div>
      <h1>Travel List</h1>
      <div className="travel-container">
        <form onSubmit={addTravelPlan}>
          <input
            className="travel-title"
            type="text"
            placeholder="insert travel destination"
          ></input>
          <button>submit</button>
        </form>
        <div className="travel-list">
          {travelList.map((destination) => (
            <Travel destination={destination} key={destination.id} />
          ))}
        </div>
        <button>Delete All</button>
      </div>
    </div>
  );
}

export default Home;
