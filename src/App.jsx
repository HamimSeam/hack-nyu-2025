import { useState } from "react";
import "./App.css";
import RestrictionSelector from "./components/RestrictionSelector/RestrictionSelector";
import MealList from "./components/MealList/MealList.jsx";


let foods = [];

async function addFoods() {
  for (let i = 0; i < 26; i++) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabet[i]}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    if (!data.meals) continue;
    data.meals.forEach(meal => {
      let food = {};
      if (meal) {
        food = { id: meal["idMeal"], name: meal["strMeal"], img: meal["strMealThumb"] }
      }
      foods.push(food);
    });

  }
}

addFoods();

// console.log(foods);

function App() {
  const restrictions = {
    religious: ["halal", "kosher"],
    nonmeat: ["vegetarian", "vegan"],
  };

  const [selected, setSelected] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState(foods);
  console.log(filteredMeals);
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

