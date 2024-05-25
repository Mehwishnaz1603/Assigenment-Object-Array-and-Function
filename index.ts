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

type Friend = {
    firstName: string; lastName: string; id?: number;     // Optional id property
  }
let people = {    // Define an object containing an empty array for friends
friends: [] as Friend[] // Initialize an empty array of type Friend
  };
  
  const friend1: Friend = {    // Create three friend objects

    firstName: "Ahmed", lastName: "Ali", id: 1
  };
  const friend2: Friend = {
    firstName: "Bisma", lastName: "Khanzadi"
  };
  
  const friend3: Friend = {
    firstName: "Hamza", lastName: "Shaikh", id: 3
  };
people.friends.push(friend1, friend2, friend3);  // Add friend objects to the friends array
   console.log(people);   // Output the entire people object to the console

//    Assignment 2:Manipulating an Array: Rearranging Words
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".

  // Original array of words
let words: (string | number | boolean)[] = ["I", "am", "a", "student", "of", "GIAIC"];

// Convert non-strings to strings if needed
words = words.map(word => typeof word === "string" ? word : String(word));

// Rearrange words in the desired order
const rearrangedWords = [words[0], words[1], words[2], words[5], words[3], words[4]];

// Combine elements back into a single string
const result = rearrangedWords.join(" ");

// Output the result
console.log(result); // Output: "I am a student of GIAIC"
