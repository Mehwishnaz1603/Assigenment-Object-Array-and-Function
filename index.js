var people = {
    friends: [] // Initialize an empty array of type Friend
};
var friend1 = {
    firstName: "Ahmed", lastName: "Ali", id: 1
};
var friend2 = {
    firstName: "Bisma", lastName: "Khanzadi"
};
var friend3 = {
    firstName: "Hamza", lastName: "Shaikh", id: 3
};
people.friends.push(friend1, friend2, friend3); // Add friend objects to the friends array
console.log(people); // Output the entire people object to the console
