import React from "react";

const IngredientChoice = function(props) {
  const refArray = ["spirit", "mixer", "extra"];
  return (
    <div>
      <h1>Cocktail Generator</h1>
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
    <div>
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
                onChange={props.handleChange}
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
