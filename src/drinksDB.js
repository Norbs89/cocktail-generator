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
  appleDaiquiri:
    "Shake 60ml light rum, 45ml apple juice, 15ml freshly squeezed lime juice together with ice and fine strain into a chilled glass. For best taste, add a touch of sugar syrup to the mixture.",
  vodkaCrush:
    "This recipe is best prepared with fresh pineapple but can be substituted with 100% pineapple juice. Place the pineapple flesh/juice,100ml vodka, a bit of sugar,20ml lemon juice (and mint leaves - optional) in a blender and blend to combine. Pour the mixture into a plastic container or ice-cream tray and freeze for 1-2 hours until firm on the outside and still liquid in the centre. Tip the mixture into a bowl and beat strongly, then keep in the fridge until required.",
  greyhound:
    "A simple cocktail with only 3 ingredients. The balance in measurements is important and it's what makes this cocktail super tasty. Mix 1 parts of vodka with 4 parts of grapefruit juice and squeeze some fresh lime into it.",
  grapefruitDaiquiri:
    "Shake 60ml white rum, 40ml grapefruit juice and 10ml lime juice together with ice and fine strain into a chilled glass. For best taste, add a touch of sugar syrup to the mixture.",
  appleMargarita:
    "This cocktail is best served with a splash of apple liqueur added to the mix. Pour 1 parts of tequila,1 parts of apple juice, a splash of lemon juice (or any other sour mixer) and ideally 1 parts of apple liqueur together with ice into a blender and blend until smooth. Serve it in a chilled glass.",
  patron:
    "This cocktail is best served with a splash of orange liqueur added to the mix. Pour one parts of tequila over ice, top it off with 8 parts of pineapple juice and squeeze one fresh lime into the glass. Stir and serve.",
  gingerMargarita:
    "Add 1 parts of tequila, 1 parts of lime juice, 3 parts of ginger beer, simple syrup (if you have it at hand), and ice to a large glass or cocktail shaker and stir vigorously. Don't shake with a lid on or it will erupt from the ginger beer carbonation. Pour it into serving glass with a few ice cubes. Garnish with a lime wedge and serve immediately."
};

const drinks = [
  {
    name: "Appletini",
    spirit: "vodka",
    mixer: "apple juice",
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
    name: "Apple Daiquiri",
    spirit: "rum",
    mixer: "apple juice",
    extra: "lime juice",
    recipe: "appleDaiquiri"
  },
  {
    name: "Pineapple vodka crush",
    spirit: "vodka",
    mixer: "pineapple juice",
    extra: "lemon juice",
    recipe: "vodkaCrush"
  },
  {
    name: "Vodka Greyhound",
    spirit: "vodka",
    mixer: "grapefruit juice",
    extra: "lime juice",
    recipe: "greyhound"
  },
  {
    name: "Grapefruit Daiquiri",
    spirit: "rum",
    mixer: "grapefruit juice",
    extra: "lime juice",
    recipe: "grapefruitDaiquiri"
  },
  {
    name: "Apple Margarita",
    spirit: "tequila",
    mixer: "apple juice",
    extra: "lemon juice",
    recipe: "appleMargarita"
  },
  {
    name: "Patron Pineapple",
    spirit: "tequila",
    mixer: "pineapple juice",
    extra: "lime juice",
    recipe: "patron"
  },
  {
    name: "GINGER BEER MARGARITA",
    spirit: "tequila",
    mixer: "ginger beer",
    extra: "lime juice",
    recipe: "gingerMargarita"
  }
];

export { recipes, drinks };
