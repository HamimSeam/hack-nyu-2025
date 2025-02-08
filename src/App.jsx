import { useState } from "react";
import "./App.css";
import RestrictionSelector from "./components/RestrictionSelector/RestrictionSelector";

function App() {
  const restrictions = {
    religious: ["halal", "kosher"],
    nonmeat: ["vegetarian", "vegan"],
  };

  const [selected, setSelected] = useState([]);

  function updateSelectedRestrictions(newRestrictions) {
    setSelected(newRestrictions);
  }

  return (
    <>
      <h1>Restriction Selector</h1>
      <RestrictionSelector
        restrictions={restrictions}
        updateSelectedRestrictions={updateSelectedRestrictions}
      />
      {selected.map((option) => (
        <h3 key={option}>{option}</h3>
      ))}
    </>
  );
}

export default App;
