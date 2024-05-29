// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data 
// structure
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName, 
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your 
// friend list.
var peoples;
var friend1 = { firstName: "Ahmed", lastName: " Ali", id: 100 }; //Create Three objects
var friend2 = { firstName: "Fatima", lastName: "Nazeer Ahmad", id: 101 };
var friend3 = { firstName: "Kulsoom", lastName: "Qadir", };
var people = { friends: [friend1, friend2, friend3] }; // Add Friends Objects to the Friends array
console.log(people);
//  Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"]; //Given Array
scrambledArray.unshift("I");
console.log(scrambledArray);
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
console.log(scrambledArray);
console.log(scrambledArray.join(" "));
// Define an array to store product information
var inventory = [];
var product1 = { name: "Laptop", model: "ABC123", cost: 999, quantity: 10 }; // Create three product objects
var product2 = {
    name: "Smartphone",
    model: "XYZ456",
    cost: 599,
    quantity: 20
};
var product3 = { name: "Headphones", model: "DEF789", cost: 99, quantity: 30 };
inventory.push(product1, product2, product3); // Add product objects to the inventory array
console.log("Quantity of third product:", inventory[2].quantity); // Access and log the quantity property of a specific product (e.g., third product) in the inventory array
// Adding more elements to the inventory array (optional)
var product4 = { name: "Tablet", model: "JKL012", cost: 299, quantity: 15 };
inventory.push(product4);
// Accessing and logging more elements within the inventory array (optional)
console.log("Quantity of fourth product:", inventory[3].quantity);
// Displaying the entire inventory array
console.log("Inventory:", inventory);
