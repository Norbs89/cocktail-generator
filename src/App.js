/** @format */

import React from "react";
import "./App.css";
import recipes from "./recipes.js";

const IngredientChoice = function(props) {
	return (
		<div>
			<h1>Cocktail Generator</h1>
			<form>
				<h3>Spirits</h3>
				<label>
					<input
						type="radio"
						name="spirit"
						value="vodka"
						onChange={props.handleChange}></input>
					vodka
				</label>
				<label>
					<input
						type="radio"
						name="spirit"
						value="rum"
						onChange={props.handleChange}></input>
					rum
				</label>
				<label>
					<input
						type="radio"
						name="spirit"
						value="tequila"
						onChange={props.handleChange}></input>
					tequila
				</label>
			</form>
		</div>
	);
};

class App extends React.Component {
	state = {
		ingredients: [
			{
				spirit: "vodka",
				mixer: "tomato juice",
				extra: "tabasco",
				drink: "bloodyMary"
			},
			{
				spirit: "rum",
				mixer: "pineapple juice",
				extra: "piece of fruit",
				drink: "pinaColada"
			}
		],
		userInput: "",
		outputRecipe: ""
	};
	handleChange = (event) => {
		this.setState({ userInput: event.target.value });
	};
	generateRecipe = () => {
		const recipe = "";
		this.state.ingredients.forEach((ingredient) => {
			if (this.state.userInput === ingredient.spirit) {
				this.setState({ outputRecipe: recipes[ingredient.drink] });
			}
		});
	};
	render() {
		console.log(this.state.outputRecipe);
		return (
			<div>
				<IngredientChoice
					ingredients={this.state.ingredients}
					userInput={this.state.userInput}
					handleChange={this.handleChange}
				/>

				<button onClick={this.generateRecipe}>Generate Recipe</button>
				<p>{this.state.outputRecipe}</p>
			</div>
		);
	}
}

export default App;
