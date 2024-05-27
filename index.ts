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

let peoples: {
  friends: Friend[];
}
type Friend = { firstName: string, lastName: string,id?: number}       //Optional id array
let friend1: Friend = { firstName: "Ahmed", lastName: " Ali",id: 100};   //Create Three objects
let friend2: Friend = {firstName: "Fatima",lastName: "Nazeer Ahmad",id: 101};
let friend3: Friend = {firstName: "Kulsoom",lastName: "Qadir",};
let people = { friends: [friend1, friend2, friend3]}       // Add Friends Objects to the Friends array
console.log(people);

//  Assignment 2:Manipulating an Array: Rearranging Words
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".

let words: (string | number | boolean)[] = ["I", "am", "a", "student", "of", "GIAIC"];  // Original array of words
words = words.map(word => typeof word === "string" ? word : String(word));  // Convert non-strings to strings if needed
const rearrangedWords = [words[0], words[1], words[2], words[5], words[3], words[4]];// Rearrange words in the desired order
const result = rearrangedWords.join(" ");// Combine elements back into a single string
console.log(result); 

// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product 
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name, 
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the 
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand 
// how to manage product data.

// Define a type for a product object
type Product = {name: string; model: string;cost: number; quantity: number};

// Define an array to store product information
const inventory: Product[] = [];

const product1: Product = {name: "Laptop", model: "ABC123",cost: 999, quantity: 10 };// Create three product objects
const product2: Product = {
  name: "Smartphone",
  model: "XYZ456",
  cost: 599,
  quantity: 20
};
const product3: Product = {name: "Headphones",model: "DEF789", cost: 99, quantity: 30};
inventory.push(product1, product2, product3); // Add product objects to the inventory array
console.log("Quantity of third product:", inventory[2].quantity); // Access and log the quantity property of a specific product (e.g., third product) in the inventory array

// Adding more elements to the inventory array (optional)
const product4: Product = { name:"Tablet", model:"JKL012", cost: 299, quantity: 15};
inventory.push(product4);

// Accessing and logging more elements within the inventory array (optional)
console.log("Quantity of fourth product:", inventory[3].quantity);

// Displaying the entire inventory array
console.log("Inventory:", inventory);
