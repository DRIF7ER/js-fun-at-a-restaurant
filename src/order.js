/** 1. "should add new orders to an order type list"
 *      1a. needs two inputs; order # and object array of orders.
 *      1b. needs to add whole object to array as orders will come in as objects
 *      1c. input = object; object <<<DOES OBJECT ARRAY HAVE 3 ELEMENTS>>> false ==ADD==>
 *          input to object array
 * 2. "should add another order to an order type list"
 *      2a. needs to continue adding order object to object array.
 *      2b. needs to add whole object to array.
 *      2c. input = object; object <<<DOES OBJECT ARRAY HAVE 3 ELEMENTS>>> false ==ADD==>
 *          input to object array
 * 3. "should not be able to hold more than 3 orders at a time"
 *      3a. should NOT add objects to object array if array has 3 elements.
 *      3b. input = object; object <<<DOES OBJECT ARRAY HAVE 3 ELEMENTS>>> true >>NO ADD\\
 *          returns full array 
 */

function takeOrder(chronOrder, outFor){
  if (outFor.length >= 3){
    return outFor;
  }else {outFor.push(chronOrder);
    return outFor}
};

/** 1. "should remove an order by order number"
 *      1a. the functon should be able to remove an order from the object array
 *          based on the number of the order.
 *      1b. the function should access an already existing object array and search for
 *          the order number property of every object in array to evaluate.
 *      1c. input = number; number <<<DOES THIS NUMBER EXIST IN ANY OBJECTS IN ARRAY>>>
 *          if true <==REMOVE OBJECT== from array.
 * 2. "should remove a different order by order number"
 *      2a. we should be able to pass a new number into array and remove another object.
 *      2b. input = number; number <<<DOES THIS NUMBER EXIST IN ANY OBJECTS IN ARRAY>>>
 *          if true <==REMOVE OBJECT== from array.
 */

function refundOrder (orderNum, outFor2){
  for (var i = 0; i < outFor2.length; i++){
    if (outFor2[i].orderNumber === orderNum){
      outFor2.splice(i, 1);
    }
  }
}

/** 1. "should be a function"
* 2. "should list out all of the order items by name"
     2a. needs to be able to access and filter through an object array an pull out 
         a specific property.
     2b. needs to take that specified property and return a list of those values
     2c. input = object array <<<LOOK FOR ITEM PROPERTY>>> found a number of elements
         ==CREATE AN ARRAYED LIST OF THOSE VALUES==> a listed array
* 3. "should list out different order items by name"
     3a. same as above but with a new object array
*/

function listItems (outFor3){
  var items = []
  for (var i = 0; i < outFor3.length; i++){
    items.push(outFor3[i].item)
  } return items.join(", ")
}

/** 1."should be a function"
 * 2. "should tell us if an order is in the list"
 *      2a. needs to be able to sort through an object array and find a specific order
 *          based on the item property value.
 *      2b. needs to evaluate the property and compare a parameter against a strict equal.
 *      2c. return true or false based on the parameters.
 * 3. "should tell us if an order is in another list"
 *      3a. same as above but with new parameters
 */

// function searchOrder (deArr, deFood){
//   for (var i = 0; i < deArr.length; i++){
//     if (deArr[i].item === deFood){
//       console.log(deArr[i].item)
//     }
//   }
// }

// var order1 = {
//   orderNumber: 1234,
//   item: "burger",
//   price: "8.99",
//   orderType: "delivery",
//   status: "accepted"
// };

// var order2 = {
//   orderNumber: 2342,
//   item: "blt sandwich",
//   price: "5.99",
//   orderType: "delivery",
//   status: "accepted"
// };

// var deliveryOrders = [order1, order2];

function searchOrder(outFor4, aFood){
  for (var i = 0; i < outFor4.length; i++){
    if (outFor4[i].item === aFood){
    console.log(outFor4[i].item)
    return true
    }
  }return false
}

// console.log(searchOrder(deliveryOrders, "burger"), '><> burg');
// console.log(searchOrder(deliveryOrders, "sushi"), '><> soosh');
// console.log(searchOrder(deliveryOrders, "blt sandwich"), '><> blt');

// function searchOrder(outFor4, aFood){
//   var checkVal = aFood;
//   for (var i = 0; i < outFor4.length; i++){
//     if (outFor4[i].item === checkVal){
//       console.log(outFor4[i].item, checkVal);
//       //checkVal.push(outFor4[i].item);
//       //console.log(checkVal, '><><>checkVal true')
//         return checkVal = true}
//     else if(outFor4[i].item !== checkVal){
//       //checkVal.push(outFor4[i].item);
//       //console.log(checkVal, '><><>checkVal false')
//         return checkVal = false
//     }
//   }
// }


// function searchOrder (outFor4, aFood){
//   for (var i = 0; i < outFor4.length.item; i++){
//     if (outFor4[i].item === aFood){
//       console.log(`${outFor4[i].item}, '><><>if item`)
//       return console.log(true, '><><>true')
//     }else {
//       console.log(outFor4[i].item, '><><>else item')
//       return console.log(false, '><><>false')}
//   }
// }

// var num1 = {
//   numb1: 25,
//   numb2: 43,
//   numb3: 50
// }
// var num2 = {
//   numb1: 65,
//   numb2: 150,
//   numb3: 98
// }
// var num3 = {
//   numb1: 75,
//   numb2: 110,
//   numb3: 23
// }

// var numbers = [num1, num2, num3]

// function evaluateNumbers(deArr, deNum){
//   for (var i = 0; i < deArr.length; i++){
//     if (deNum === deArr[i].value){
//       return true
//     }else {return false
//     }
//   }
// }

// function evaluateNumbers (deArr, deNum){
//   var evalArr = []
//   var finalArr = []
//   for (var i = 0; i < deArr.length; i++){
//     evalArr.push(deArr[i]);
//     console.log(evalArr, '><> AFTER PUSH');
//   }
//   for (var i = 0; i < evalArr.length; i++){
//     Object.assign(finalArr, evalArr[i])
//     console.log(finalArr, "><> AFTER OBJECT ASSIGN")
//     console.log(finalArr.forEach[deNum], "><> AFTER INCLUDES");
//   }
// }

// function evaluateNumbers (deArr, deNum){
//   var evalArr = []
//   var intermArr = []
//   var finalArr = []
//   for (var i = 0; i < deArr.length; i++){
//     evalArr.push(deArr[i]);
//     console.log(evalArr, '><> AFTER PUSH');
//   }intermArr.push(evalArr);
//   console.log(intermArr, "><> AFTER INTERM PUSH")
//   for (var i = 0; i < intermArr.length; i++){
//     Object.assign(finalArr, intermArr[i])
//   }console.log(finalArr, "><> AFTER OBJECT ASSIGN")
// }


// let arr = [{apple: "🍎"}, {orange: "🍊"}, {strawberry: "🍓"}];
// let finalObj = {};
// console.log("The array is \n", arr);

// // loop elements of the array 
// for(let i = 0; i < arr.length; i++ ) {
//   Object.assign(finalObj, arr[i]);
// }

// console.log("\nAfter converting array of objects to single object");
// console.log(finalObj);


// function evaluateNumbers(deArr, deNum){
//   var checkVal = []
//   for (var i = 0; i < deArr.length; i++){
//     if (deArr[i]){
//       checkVal.push(deArr[i]);
//       console.log(checkVal, '><>AFTER PUSH');
//     }else (){}
//       checkVal.include[deNum];
//       console.log(checkVal, '><> ?')
//     }else if(checkVal === true){
//       return true
//     }else {return false
//     }
//   }
// }

// function evaluateNumbers(deArr, deNum){
//   var checkVal = []
//   for (var i = 0; i < deArr.length; i++){
//     checkVal.push(deArr[i]);
//     console.log(Array.from(checkVal));}
//     console.log(checkVal.includes[deNum], '><><> T or F?')
//   if (checkVal = true){}
//     return true
// }

// function evaluateNumbers(deArr, deNum){
//   for (var i = 0; i < deArr.length; i++){
//     if (deArr[i].includes[deNum]){
//       console.log(i, '><><>what is i')
//     return true
//      }else {
//        return false
//    }
//   }
// }



// console.log(evaluateNumbers(numbers, 25), 'test1')
// console.log(evaluateNumbers(numbers, 75), 'test2')
// console.log(evaluateNumbers(numbers, 98), 'test3')
// console.log(evaluateNumbers(numbers, 'pole'), 'test4')
// console.log(evaluateNumbers(numbers, 0), 'test5')

/** 1.  */


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}