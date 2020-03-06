import React from "react";
import "./App.css";
import recipes from "./recipes.js";
import Modal from "react-modal";
import IngredientChoice from "./components/ingredientChoice";

class App extends React.Component {
  state = {
    userInput: {
      spirit: "",
      mixer: "",
      extra: ""
    },
    outputRecipe: "",
    drinkName: "",
    isOpen: false,
    drinks: [
      {
        name: "Appletini",
        spirit: "vodka",
        mixer: "cloudy apple juice",
        extra: "lemon juice",
        recipe: "appletini"
      },
      {
        name: "PiNa Colada",
        spirit: "rum",
        mixer: "pineapple juice",
        extra: "piece of fruit",
        recipe: "pinaColada"
      },
      {
        name: "Tequila Sunrise",
        spirit: "tequila",
        mixer: "orange juice",
        extra: "grenadine",
        recipe: "tequilaSunrise"
      },
      {
        name: "Screwdriver",
        spirit: "vodka",
        mixer: "orange juice",
        extra: "bitter liqueur",
        recipe: "screwdriver"
      },
      {
        name: "Rum Babalu",
        spirit: "rum",
        mixer: "ginger beer",
        extra: "bitter liqueur",
        recipe: "rumBabalu"
      }
    ]
  };
  handleChange = (header, value) => {
    this.setState(currentState => {
      return {
        userInput: {
          ...currentState.userInput,
          [header]: value
        }
      };
    });
  };

  closePopup = event => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  generateRecipe = () => {
    const { spirit, mixer, extra } = this.state.userInput;
    this.state.drinks.forEach(drink => {
      if (
        spirit === drink.spirit &&
        mixer === drink.mixer &&
        extra === drink.extra
      ) {
        this.setState({
          outputRecipe: recipes[drink.recipe],
          drinkName: drink.name,
          isOpen: !this.state.isOpen
        });
      }
    });
  };

  render() {
    return (
      <div>
        <IngredientChoice
          drinks={this.state.drinks}
          userInput={this.state.userInput}
          handleChange={this.handleChange}
        />

        <button onClick={this.generateRecipe}>Generate Recipe</button>

        <Modal className="popup" ariaHideApp={false} isOpen={this.state.isOpen}>
          <div className="popup__text">
            <h2>{this.state.drinkName}</h2>
            <p>{this.state.outputRecipe}</p>
          </div>
          <button onClick={this.closePopup}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default App;
