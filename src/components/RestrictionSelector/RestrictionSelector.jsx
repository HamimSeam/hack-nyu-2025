import "./RestrictionSelector.css";

function RestrictionSelector({ restrictions, updateSelectedRestrictions }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newRestrictions = [];

    event.target.querySelectorAll("input").forEach((input) => {
      if (input.checked) newRestrictions.push(input.name);
    });

    console.log(newRestrictions);
    updateSelectedRestrictions(newRestrictions);
  }

  return (
    <form className="restriction-selector" onSubmit={handleSubmit}>
      {Object.entries(restrictions).map(([category, options]) => (
        <div key={category}>
          <h3>{category}</h3>
          {options.map((option) => (
            <div key={option}>
              <input
                id={option + "-checkbox"}
                name={option}
                type="checkbox"
              ></input>
              <label htmlFor={option + "-checkbox"}>{option}</label>
              <br />
            </div>
          ))}
        </div>
      ))}
      <button type="Submit">Submit</button>
    </form>
  );
}

export default RestrictionSelector;
