function nameMenuItem(foodItem) {
  return `Delicious ${foodItem}`
};

function createMenuItem (name, price, type){
  //console.log(menuItem)
  var menuItem = {
  name: name,
  price: price,
  type: type}
  return menuItem
};

// function createMenuItem (aFood){
//   console.log(menuItem)
//   var menuItem =[];
//   menuItem.push = menuItem.name = `Delicious ${aFood}`,
//   menuItem.price = 10.99,
//   menuItem.type = "breakfast"
//   return menuItem
// }

// console.log(rawItem, foodStuffs)
// function addIngredients(rawItem, foodStuffs){
//   var foodStuffs = []
//   if (foodStuffs.length === 0){
//     foodStuffs.push(rawItem)
//     console.log(rawItem, foodStuffs, "<>>>>>L29")
//     return foodStuffs
//   }else {
//     return "array already updated."
//   }
// };

//console.log(rawItem, foodStuffs)

// function addIngredients(rawItem, ingredients){
//   var ingredients = []
//   if (!ingredients.includes(rawItem)){
//     ingredients.push(rawItem)
//   }return ingredients
// };

//console.log(addIngredients("fish", 0))
// console.log(rawItem, foodStuffs)

//var foodStuffs = []

// function addIngredients (rawItem, foodStuffs){
//   console.log(rawItem, foodStuffs)
//   // if the item is the same as another item, no add.
//   if(foodStuffs.includes(rawItem)){
//     return foodStuffs
//  }else { //(foodStuffs.length === foodStuffs.length && rawItem == rawItem)
//     foodStuffs.push(rawItem)
//     return foodStuffs}
//   }

function addIngredients (rawItem, foodStuffs){
  //console.log(rawItem, foodStuffs)
  if(foodStuffs.includes(rawItem)){
    return foodStuffs
  } else {foodStuffs.push(rawItem)
    return foodStuffs}
  };

// console.log(addIngredients("fish", foodStuffs))
// console.log(addIngredients("fish", foodStuffs))
// console.log(addIngredients("sauce", foodStuffs))

function formatPrice (price){
  //console.log(price)
  return `$${price}`
};

function decreasePrice (price2){
  //console.log(price2)
  return price2 * .9
};

// var speesForFreez = {
//   lordFood: lordFood,
//   deStuff: deStuff,
//   timeOfDay: timeOfDay}
// console.log(speesForFreez, '>>>>> L85')

function createRecipe (lordFood, deStuff, timeOfDay){
  var recipe = {
    title: lordFood,
    ingredients: deStuff,
    type: timeOfDay
  };
    return recipe
}

// console.log(createRecipe('potato soup', ['potatoes', 'hamburger', 'salt'], 'dinner')), '>>>>>> L92'


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


