import "./RestrictionSelector.css";

function RestrictionSelector({ restrictions, updateSelectedRestrictions }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newRestrictions = [];

    event.target.querySelectorAll("input").forEach((input) => {
      if (input.checked) newRestrictions.push(input.name);
    });

    updateSelectedRestrictions(newRestrictions);
  }

  return (
    <form className="restriction-selector" onSubmit={handleSubmit}>
      <div className="options">
        {Object.entries(restrictions).map(([category, options]) => (
          <div key={category}>
            <h3 className="category">{category}</h3>
            {options.map((option) => (
              <div key={option} className="option">
                <input
                  id={option + "-checkbox"}
                  name={option}
                  type="checkbox"
                ></input>
                <label htmlFor={option + "-checkbox"}>{option}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="apply-filters-container">
        <button type="submit">Apply Filters</button>
      </div>
    </form>
  );
}

export default RestrictionSelector;
