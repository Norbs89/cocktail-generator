import React from "react";
import "./App.css";
import { recipes, drinks } from "./drinksDB.js";
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
    extraOffered: "",
    isOpen: false
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
    const { spirit, mixer } = this.state.userInput;
    drinks.forEach(drink => {
      if (spirit === drink.spirit && mixer === drink.mixer) {
        this.setState({
          extraOffered: drink.extra,
          outputRecipe: recipes[drink.recipe],
          drinkName: drink.name,
          isOpen: !this.state.isOpen
        });
      }
    });
  };

  render() {
    const {
      userInput,
      isOpen,
      drinkName,
      outputRecipe,
      extraOffered
    } = this.state;
    return (
      <div>
        <IngredientChoice
          drinks={drinks}
          userInput={userInput}
          handleChange={this.handleChange}
        />

        <button onClick={this.generateRecipe}>Generate Recipe</button>

        <Modal className="popup" ariaHideApp={false} isOpen={isOpen}>
          <div className="popup__text">
            <h2>{drinkName}</h2>
            <p>{outputRecipe}</p>
            {userInput.extra !== extraOffered && (
              <p>
                top tip: the user choose {userInput.extra} but we want to offer{" "}
                {extraOffered}
              </p>
            )}
          </div>
          <button onClick={this.closePopup}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default App;
