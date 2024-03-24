/** 1. "should be a function"
 * 2. "should have a name"
 *      2a. 
 * 3. "should be able to have a different name"
 * 4. "should have menus"
 * 5. "should have different types of menus"
 */

function createRestaurant (uhEat){
  var deFreakinFood = {
    name: uhEat,
    menus: {breakfast: [], lunch: [], dinner: []}
  }
  return deFreakinFood
}

function addMenuItem (deFreakinFood, uhNoms){
  //console.log(deFreakinFood.menus[uhNoms.type])
  if (deFreakinFood.menus[uhNoms.type].includes(uhNoms)){
    return
  }
  else if(uhNoms.type === "breakfast"){
    deFreakinFood.menus.breakfast.push(uhNoms)
  }else if(uhNoms.type === "lunch"){
  deFreakinFood.menus.lunch.push(uhNoms)
  }else {deFreakinFood.menus.dinner.push(uhNoms)
  }
}

function removeMenuItem (deFreakinFood, uhNoms, uhNomsType){
  for (var i = 0; i < deFreakinFood.menus[uhNomsType].length; i++){
    if (deFreakinFood.menus[uhNomsType][i].name === uhNoms){
      deFreakinFood.menus[uhNomsType].splice(i, 1)
      return `No one is eating our ${uhNoms} - it has been removed from the ${uhNomsType} menu!`
    }
  }return `Sorry, we don't sell ${uhNoms}, try adding a new recipe!`
}

// function removeMenuItem (deFreakinFood, uhNoms, uhNomsType){
//   var uhNomsNQuestion = deFreakinFood.menus[menuType].findIndex(function(uhNoms){
//     return uhNoms.name === uhNomsName;
//   });
//   if (uhNomsNQuestionIndex !== -1) {
//     deFreakinFood.menus[menuType].splice(uhNomsName, 1);
//     return `"No one is eating our ${uhNomsName} - it has been removed from the ${menuType} menu!"`;
//   }else {
//     return `Sorry, we don't sell ${uhNomsName}, try adding a new recipe!`;
//   };
// }

// function removeMenuItem (deFreakinFood, uhNoms, uhNomsType){
//   var item = restaurant.menus[menuType].findIndex(function(menuItem){
//     return menuItem.name === itemName;
//   });

//   if (itemIndex !== -1) {
//     restaurant.menus[menuType].splice(itemName, 1);
//     return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`;
//   }else {
//     return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
//   };
// }

function checkForFood (deFreakinFood, uhFood){
  for (var i = 0; i < deFreakinFood.menus[uhFood.type].length; i++){
//console.log(deFreakinFood)    
    if (deFreakinFood.menus[uhFood.type][i].name === uhFood.name){
      //console.log(deFreakinFood)
      return `Yes, we're serving ${uhFood.name} today!`
    }
  }return `Sorry, we aren't serving ${uhFood.name} today.`
}

// function checkForFood(restaurant, item){
//   var menuType = item.type;
//   var menuindex = restaurant.menus[menuType].findIndex(function(menuItem){
//     return menuItem.name === item.name;
//   });

//   if (menuindex !== -1) {
//     return `Yes, we're serving ${item.name} today!`;
//   }else {
//     return `sorry we are'nt serving ${item.name} today!`;
//   }
// }


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}