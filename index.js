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
var people = {
    friends: []
}; // Initialize an empty array of type Friend
var friend1 = { firstName: "Ahmed", lastName: "Ali", id: 1 };
var friend2 = { firstName: "Bisma", lastName: "Khanzadi" };
var friend3 = { firstName: "Hamza", lastName: "Shaikh", id: 3 };
people.friends.push(friend1, friend2, friend3); // Add friend objects to the friends array
console.log(people);
//    Assignment 2:Manipulating an Array: Rearranging Words
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
var words = ["I", "am", "a", "student", "of", "GIAIC"]; // Original array of words
words = words.map(function (word) { return typeof word === "string" ? word : String(word); }); // Convert non-strings to strings if needed
var rearrangedWords = [words[0], words[1], words[2], words[5], words[3], words[4]]; // Rearrange words in the desired order
var result = rearrangedWords.join(" "); // Combine elements back into a single string
console.log(result);
// Define an array to store product information
var inventory = [];
// Create three product objects
var product1 = {
    name: "Laptop",
    model: "ABC123",
    cost: 999,
    quantity: 10
};
var product2 = {
    name: "Smartphone",
    model: "XYZ456",
    cost: 599,
    quantity: 20
};
var product3 = {
    name: "Headphones",
    model: "DEF789",
    cost: 99,
    quantity: 30
};
// Add product objects to the inventory array
inventory.push(product1, product2, product3);
// Access and log the quantity property of a specific product (e.g., third product) in the inventory array
console.log("Quantity of third product:", inventory[2].quantity);
// Adding more elements to the inventory array (optional)
var product4 = {
    name: "Tablet",
    model: "JKL012",
    cost: 299,
    quantity: 15
};
inventory.push(product4);
// Accessing and logging more elements within the inventory array (optional)
console.log("Quantity of fourth product:", inventory[3].quantity);
// Displaying the entire inventory array
console.log("Inventory:", inventory);
