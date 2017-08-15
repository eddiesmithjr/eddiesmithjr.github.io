/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal['name'] = 'King';
animal.species = 'dog';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'Woof';
noises.push('Howl');
noises.unshift('Grrr');
noises[noises.length] = 'Yelp';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal.noises.push('Whimper');
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);
var duck = { 
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
    };

animals.push(duck);

var cat = {
    species: 'cat',
    name: 'Garfield',
    noises: ['meow', 'rawr', 'purr'],
    };
    
var rabbit = {
    species: 'rabbit',
    name: 'Bugs',
    noises: ['What up Doc?', 'Whaddya say!', 'That\'s All Folks!']
    };
    
    animals.push(cat, rabbit);
    console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I'm choosing an array because it can hold the list of friends.
var friends = [];
var min = Math.ceil(0);
var max = Math.floor(animals.length);
var randomFriend;

function selectFriends(animals){
    
    return randomFriend = animals[Math.floor(Math.random() * (max - min)) + min];
}
selectFriends(animals);

friends.push(randomFriend.name);

console.log(randomFriend);

console.log(friends);

for (var i = 0; i < animals.length; i ++) {
    
    if (randomFriend.name === animal.name) {
    i++;
    }
    
    animal['friends'] = friends;
}

console.log(animals);

/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
