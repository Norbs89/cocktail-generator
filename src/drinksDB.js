const recipes = {
  pinaColada:
    "Pulse all the ingredients along with a handful of ice in a blender until smooth. Pour into a tall glass and garnish as you like. For best results, add a splash of coconut milk to the mixture.",
  appletini:
    "Shake 50ml vodka, 50ml cloudy apple juice, 1 tsp lemon juice and 1 tsp maple syrup (optional) in an ice-filled shaker until the outside of the shaker feels very cold. Strain into a martini glass and garnish with a slice of apple.",
  screwdriver:
    "Squeeze the juice from 1 large or 2 small oranges and 1 clementine and set aside. Put a handful of ice cubes into a tall glass and pour over 50ml vodka followed by the fruit juices. Stir gently to combine then add a few dashes of  bitter liqueur and a wedge of orange to garnish.",
  tequilaSunrise:
    "In a highball glass filled with ice cubes, pour the tequila and orange juice. Stir well, then slowly pour the grenadine around the inside edge of the glass. It will sink and gradually rise to mix with the other ingredients.",
  rumBabalu:
    "Add the rum and bitter liqueur in a shaker along with ice and shake well until chilled. Strain over fresh ice in a double rocks glass, top with ginger beer and garnish with an orange peel.",
  moscowMule:
    "Shake 50ml vodka, 25ml lime juice juice and 1 tsp of any sugar syrup (optional) in an ice-filled shaker for about 10-15 seconds. Fill your glass with fresh ice. Add splash of ginger beer (amount to taste) to bottom of glass and strain drink into glass. Garnish with lime wedge.",
  carribeanSunrise:
    "Pour 45 ml rum and 60 ml orange juice into glass over ice. Slowly pour 15ml of grenadine syrup around the inside edge of the glass. It will sink and gradually rise to mix with the other ingredients.",
  toronha:
    "Pour 50ml Tequila, 50ml grapefruit juice, 1 tablespoon grenadine syrup (and ideally 10ml Triple Sec, if you have it on hand) into a blender with ice. Blend well.Strain into a chilled glass. A very tart combination, but actually works amazingly well. A must try!",
  carioca:
    "Shake 1/2 parts of light rum, 1 part pineapple juice and 1/2 parts Lime juice together with ice and strain into a chilled glass. For best results, add a touch of simple sugar syrup and a dash of bitter liqueur too!"
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
    extra: "fresh pineapple",
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
  },
  {
    name: "Moscow Mule",
    spirit: "vodka",
    mixer: "ginger beer",
    extra: "lime juice",
    recipe: "moscowMule"
  },
  {
    name: "Carribean Sunrise",
    spirit: "rum",
    mixer: "orange juice",
    extra: "grenadine",
    recipe: "carribeanSunrise"
  },
  {
    name: "Toronha",
    spirit: "tequila",
    mixer: "grapefruit juice",
    extra: "grenadine",
    recipe: "toronha"
  },
  {
    name: "Carioca Hawaiian",
    spirit: "rum",
    mixer: "pineapple juice",
    extra: "lime juice",
    recipe: "carioca"
  }
];

export { recipes, drinks };
