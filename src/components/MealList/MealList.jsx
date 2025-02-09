import "./MealList.css";

function MealPreview({ meal }) {
  const { name, img, description } = meal;
  return (
    <div className="meal-preview">
      <img className="meal-preview-img" src={img} />
      <h3 className="meal-preview-name">{name}</h3>
    </div>
  );
}

/*
meals should have id, image, title, description, and more breakdown that isnt in the preview
*/
function MealList({ meals }) {
  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <MealPreview key={meal.id} meal={meal} />
      ))}
    </div>
  );
}

export default MealList;
