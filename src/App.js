import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import CostPlan from "./routes/CostPlan";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/travel/:id" element={<CostPlan />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
