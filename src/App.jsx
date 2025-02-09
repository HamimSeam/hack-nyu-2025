import { useState } from "react";
import "./App.css";
import RestrictionSelector from "./components/RestrictionSelector/RestrictionSelector";
import MealList from "./components/MealList/MealList.jsx";

function App() {
  const restrictions = {
    religious: ["halal", "kosher"],
    nonmeat: ["vegetarian", "vegan"],
  };

  const [selected, setSelected] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([
    {
      id: 1,
      name: "Vietnamese Beef Pho",
      description: "Just some good old VBF.",
      img: "https://www.recipetineats.com/tachyon/2019/04/Beef-Pho_6.jpg?resize=900%2C1260&zoom=0.72",
    },
    {
      id: 2,
      name: "Biryani",
      description: "dinga dinga dinga dinga",
      img: "https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani.jpg",
    },
  ]);

  function updateSelectedRestrictions(newRestrictions) {
    setSelected(newRestrictions);
  }

  return (
    <>
      <header>
        <span className="logo">Healthy Food Shit</span>
        <div className="right-content">
          <button>Recipes</button>
          <input></input>
          <button>Search</button>
        </div>
      </header>
      <main>
        <RestrictionSelector
          restrictions={restrictions}
          updateSelectedRestrictions={updateSelectedRestrictions}
        />
        {selected.map((option) => (
          <h3 key={option}>{option}</h3>
        ))}
        <MealList meals={filteredMeals} />
      </main>
    </>
  );
}

export default App;
