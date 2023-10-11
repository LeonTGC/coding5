let coffeeOrder = [
    "leon - latte", // index position is 0
    "bob - pumpkin spiced latte", // index position is 1
    "sarah - flat white" // index position is 2
]

// add item at the end
coffeeOrder.push("bruce - oatmilk latte")
console.log("push()", coffeeOrder)

// removed the last item
coffeeOrder.pop()
console.log("pop()", coffeeOrder)

// removes first item and "shifts all others to lower index"
coffeeOrder.shift()
console.log("shift()", coffeeOrder)

// adds new item to array at beginning
coffeeOrder.unshift("hannah - hot chocolate")
console.log("shift()", coffeeOrder)

// add a item in a certain position and if any should be deleted
//              '1' in this position
//                  remove '0' items
//                          item to be inserted
coffeeOrder.splice(1, 0, "george - iced latte")
console.log("splice()", coffeeOrder)

// create a new array with the selected items
//           item in the '1' position
//              to the item up to '2' position
let removed = coffeeOrder.slice(1, 2)
console.log("slice()", removed)

// map method
// map is an array method
coffeeOrder.map((order, index) => {
    console.log(`order number: ${index + 1}, coffee: ${order}`)
})