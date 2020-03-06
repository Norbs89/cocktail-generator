const recipes = {
  pinaColada:
    "Pulse all the ingredients along with a handful of ice in a blender until smooth. Pour into a tall glass and garnish as you like.",
  appletini:
    "Shake 50ml vodka, 50ml cloudy apple juice, 1 tsp lemon juice and 1 tsp maple syrup (optional) in an ice-filled shaker until the outside of the shaker feels very cold. Strain into a martini glass and garnish with a slice of apple.",
  screwdriver:
    "Squeeze the juice from 1 large or 2 small oranges and 1 clementine and set aside. Put a handful of ice cubes into a tall glass and pour over 50ml vodka followed by the fruit juices. Stir gently to combine then add a few dashes of  bitter liqueur and a wedge of orange to garnish.",
  tequilaSunrise:
    "In a highball glass filled with ice cubes, pour the tequila and orange juice. Stir well, then Slowly pour the grenadine around the inside edge of the glass. It will sink and gradually rise to mix with the other ingredients.",
  rumBabalu:
    "Add all ingredients in a shaker except ginger beer, add ice and shake well until chilled. Strain over fresh ice in a double rocks glass, top with ginger beer and garnish with an orange peel."
};

const drinks = [
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
];

export { recipes, drinks };
