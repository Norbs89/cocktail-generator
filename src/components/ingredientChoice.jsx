import React from "react";

const IngredientChoice = function(props) {
  const refArray = ["spirit", "mixer", "extra"];
  return (
    <div>
      <div className="header">
        <h1>Cocktail Generator</h1>
      </div>
      <form>
        {refArray.map(header => {
          return radioGenerator(props, header);
        })}
      </form>
    </div>
  );
};

const radioGenerator = (props, header) => {
  const refObj = {};
  return (
    <div key={header} class="section">
      <h3>{header}</h3>

      {props.drinks.map(drink => {
        if (!refObj[drink[header]]) {
          refObj[drink[header]] = true;
          return (
            <label key={drink[header]}>
              <input
                type="radio"
                name={header}
                value={drink[header]}
                onChange={event => {
                  props.handleChange(header, event.target.value);
                }}
              />
              {drink[header]}
            </label>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
export default IngredientChoice;
