import { useEffect, useState } from "react";
import TravelList from "../components/TravelList";

function Home() {
  const [travelList, setTravelList] = useState(() => {
    const savedList = JSON.parse(localStorage.getItem("TravelList"));
    return savedList !== null ? savedList : [];
  });
  const addTravelPlan = (event) => {
    event.preventDefault();
    newDestination(event.target[0].value);
    event.target[0].value = "";
  };
  const newDestination = (getName) => {
    const destination = {
      id: Date.now(),
      name: getName,
    };
    setTravelList((prev) => [...prev, destination]);
  };
  const saveLocalStorage = () => {
    localStorage.setItem("TravelList", JSON.stringify(travelList));
  };
  useEffect(() => {
    saveLocalStorage();
  }, [travelList]);
  return (
    <div>
      <h1>Travel List</h1>
      <div className="travel-container">
        <form onSubmit={addTravelPlan}>
          <input
            required
            type="text"
            placeholder="insert travel destination"
          ></input>
          <button>submit</button>
        </form>
        <TravelList travelList={travelList} />
        <button>Delete All</button>
      </div>
    </div>
  );
}

export default Home;
