"use strict";
// 35.	Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = new Array(2);
animals = ["Goat", "Cow", "Horse"];
for (let i of animals) {
    console.log(i);
    if (i == "Cow") {
        console.log(`A cow would make great pets`);
    }
}
//  common chareacteristics 
console.log("\n All mammals give birth to babies.\nThey are warm-blooded.");
console.log(`${animals[0]} ${animals[1]} ${animals[2]} these animals would make great pet`);
