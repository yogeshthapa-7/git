// Simple Array Example - Favorite Fruits

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grape"];

console.log("My favorite fruits are:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}. ${fruits[i]}`);
}

// Bonus: Add a new fruit
fruits.push("Pineapple");
console.log("\nAfter adding Pineapple:");
console.log(fruits);