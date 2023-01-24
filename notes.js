// alr so basiscally here some notes about the following:
// scopes, arrays, loops, objects, and iterators. 
//I try and explain it in the easiest dumbed down way possible without really giving any 
//context as to why youd need it but lowkey just look and youll find what you need fr

//To call a function
variable.function();

//Global Scopes
//So basically you can use a variable outside of a function like this
const vari1 = "awesome"
const vari2 = () => {
    console.log(`${vari1} sauce`)
}
vari2() // prints "awesome sauce"

//Block Scopes
//(When a variable is defined inside a block, it is only accessible to the code within the curly braces {})
// However bro u cant use a variable thats inside a function outside of said function:
const vari3 = 5;
const vari4 = () => {
  console.log(vari3 + 4)
  let vari5 = vari3;
}
vari4()
vari5()

//Scope Pollution
// alr broe so ill just explain it dont try and use too many variables in the global namespace or whatever thats already too much work
// so alr broe what you have to do is reassign those variables in the global spaces inside the function or whatever
// your using broe and then youll be good. also remember any reassignment down the line will result in that variable
// being equal to the newly reassigned value.

const monkeyBalls = 2
const animal = "Monkey"
let favFood = "Apple"

const shmolonkey = () => {
    favFood = "Banana" // reassigned here
    console.log(`the ${animal}'s favorite food is ${favFood} and he has ${monkeyBalls} ball's.`)
    //prints the Monkey's favorite food is Banana and he has 2 ball's.
}
shmolonkey()

// However bro if we were to throw in the new reassignment after the function or even name the favFood reassignment to let favFood
// it would hella fuck that shit up fr cuh: (ripped this shit off codecademy 💀)

// an acceptable way of Scopes:
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    if (region === 'The Arctic'){
      let lightWaves = 'Northern Lights'
      console.log(lightWaves) // prints "Northern lights"
    }
    console.log(lightWaves); // "MoonLight"
  };
  logVisibleLightWaves();
// notice how we reuse the same variable twice but one prints the new reassigned name of lightWaves and one prints the 
//other that was outside of the if statement. this is ok just like use a diff variable name or some cuh

//bad way
const logSkyColor = () => {
    const dusk = true;
    let color = 'blue'; 
    if (dusk) {
      let color = 'pink';
      console.log(color); // Prints "pink"
    }
    console.log(color); // Prints "blue"
  };
   
  console.log(color); // throws a ReferenceError

  // too much reassignment of the variable color (ripped this off codecademy too 💀):
  //Within the if block, the color variable holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.
  //While we use block scope, we still pollute our namespace by reusing the same variable name twice. A better practice would be to rename the variable inside the block.

//basically bro dont be fuckin that shit up either have hella global variables or depending on what it is
// dont reassign the varaible just write out a new one



//Arrays
// alr broe so we already know what arrays are
// https://www.codecademy.com/resources/docs/javascript/arrays/concat some .methods and their uses
let array = [1, 5, "balls", 3];
console.log(array);

//Nested Arrays
//alr bro so you can put arrays in arrays
const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
console.log(target) // prints 6
// an index starts with 0, so if u start with the first index in an array it'll count -
// 0, 1, 2, 3, etc...
// you can call a certain index from an array with: array[index]
console.log(array[2]) //prints "balls"'

// just like with the values of a variable, you can reassign an index in an array:
array[2] = 4;
console.log(array) // prints {1, 5, 4, 3}

// however if this array was a const variable it would not be able to be changed
// let = mutable (changable) ---- const = not mutable (not changable)

const array1 = [1, 5, "balls", 3];
array1[2] = "thats a bad word :("
console.log(array1) //prints {1, 5, "balls", 3}

//PROPERTIES
//.length() gives you the length of an array:
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)

//.push to add items to the end of an array
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('sweep floor', 'wipe windows');
console.log(chores) //prints {'wash dishes', 'do laundry', 'take out trash', 'sweep floor', 'wipe windows'}

//.pop() removes the last item in the array
const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop()
console.log(chores2) // prints {'wash dishes', 'do laundry', 'take out trash', 'cook dinner'}

// there are many more which ill throw in in quick succession

//.shift() Removes and returns the first element of the array. All subsequent elements will shift down one place.
//.unshift() Adds one or more elements to beginning of array and returns new length.
//.slice() array method returns a shallow copy of all or part of an array without modifying the original.
// .indexOf() method returns the first index at which an element can be found. Returns -1 if the element is not found.

const funnyWords = ['fuck', 'bananas', 'shit', 'apricot', 'bologne', 'oil', 'wd40'];

funnyWords.shift(0);
console.log(funnyWords); 
// prints [ 'bananas', 'shit', 'apricot', 'bologne', 'oil', 'wd40' ]
funnyWords.unshift('popcorn');
console.log(funnyWords);
// prints [ 'popcorn', 'bananas', 'shit', 'apricot', 'bologne', 'oil', 'wd40' ]
console.log(funnyWords.slice(1,4))
// prints [ 'bananas', 'shit', 'apricot' ]
console.log(funnyWords)
//prints [ 'popcorn', 'bananas', 'shit', 'apricot', 'bologne', 'oil', 'wd40' ]
const pastaIndex = funnyWords.indexOf('pasta')=
console.log(pastaIndex)
//prints {-1}

//You can plug methods into functions for arrays :
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept) // prints [ 'arrays', 'can', 'be', 'MUTATED' ]

let removeElement = (newArr) => {
  return newArr.pop()
}

removeElement(concept)
console.log(concept) // prints [ 'arrays', 'can', 'be']



//Loops
// alr so basically loops allow you to iterate through arrays without doing it like a dumbass:
const arrayLoop =  [1, 2, 3, 4]
console.log(arrayLoop[0])
console.log(arrayLoop[1])
console.log(arrayLoop[2])
console.log(arrayLoop[3])
/* prints:  1
            2
            3
            4
*/
//alr so you can see that this is very inefficient

/*
//here is a structure for a for loop
// for (let counter = value; couner (< / > / =); counter++/counter--) {
  function
}
*/

// broe so like make sure you you know that the ; (semicolon) is used as a seperator (think about an if then statement)
// 
//first there's the for loop:
//this one counts forward given the counter is set to ++
for (let i = 1; i < 5; i++){
    console.log(i)
  }
/* prints:
1
2
3
4
*/
// The loop below loops from 3 to 0.
for (let i = 3; i >= 0; i--){
  console.log(i);
}
/* */

//Looping through arrays
// alr so basically you can use the variable name of the array as the stopping condiiton (vacationSpots)
// in this example, using .length() checks to see if the iterator is less than the length of the variables
// total array length (length is 2 (indexed at zero)) and if it is then the iterator adds one.
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}
/*
prints would love to visit Bali
I would love to visit Paris
I would love to visit Tulum
*/

// Nested For Loops
// alr broe so this one might be a little tricky if ur dumb like me
// so we can loop a loop inside of a loop to save what that loop did in an array or whatever
// it looks something like this
const bobsFollowers = ['Diana', 'Irais', 'Bebe', 'Da bebe diana'];
const tinasFollowers = ['Elijah', 'Diana', 'Irais'];
// so here we have two arrays of two different peoples followers, although
// they lowkey got some of the same followers
const mutualFollowers = [] // this array will save the mutual followers between bob and tina
for (let i = 0; i < bobsFollowers.length; i++) { //iterators through bobs followers and adds
  for(let j = 0; j < tinasFollowers.length; j++) { //iterates through tinas followers
    if (bobsFollowers[i] === tinasFollowers[j]){ //if bobs follower iterator is equal to tinas follower iterator 
      mutualFollowers.push(bobsFollowers[i])// then push bobs follower into mutual follower array
      console.log(mutualFollowers) // logs {Diana, Irais}
    }
  }
}

//While Loop
// so basically this one is a little easier (thanks codecademy UDEMyK YARDY KNOW WTF IS UP)
// take a look at this code
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

// so basically its like easier to write and understand, since the counterTwo variable is a global scope 
// and the stopping/test condition is in the variable(HERE) in there and will be accounted for during each
// round of a loop. While it runs true it will keep looping until it runs false.
// alr monkey term: While true keep running code, once/if false stop running while looop


//Do... While loop statements
// so basically this will do something until a specified condition is no longer met
// example
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do { // do this
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded); // until the condition is no longer met

//prints:
/*
1 cup was added
2 cup was added
3 cup was added
*/


//Break
// so you can break out of a loop with this, if the condition or loop gets met before its specified condition
// this is especially useful in big data structures
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) { // will itereate whole array until it meets the if requirement.
  console.log(rapperArray[i] + " And if you don't know, now you know.");
      if (rapperArray[i] === 'Notorious B.I.G.'){ // the if requirement is the console.log()s quote author
    break; // breaks the loop
  }
}



// Alr bro so we starting the next set of notes
// Objects
// so basically we can use objects to assign them to variables like this:
let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
}
// ripped this off CA (💀) We fill an object with unordered data. This data is organized into key-value pairs.
// A key is like a variable name that points to a location in memory that holds a value.

//Accessing these key value Properties:
// Simply use a "." notation to along with the object name such as the example below:
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;
const fuelType = spaceship.'Fuel Type' // this will throw a referenceError since it cannot be used as a string
// to access the fuel type or any string read the next section

// Bracket Notation
// Instead of "." notation you can use bracket notation "[]" which can access an objects property
// using its index, this is useful for objects using a string as the object name
let spaceship2 = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };
let isActive = (spaceship['Active Mission']);
console.log(spaceship['Active Mission'])
let fuelKind = (spaceship['Fuel Type'])
console.log(fuelKind)

// Property Assignment
// alr bro so basically you can mutate an object
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold';
spaceship.numEngines = 7;
delete spaceship['Secret Mission']

// you can remove, edit, and add new properties to an object


// Methods
// so a method is what an object does, properties are what an object has.
// never forget that broe.
// basically you can make an object, put in some properties AND a method (which is basically a function)
// to execute a function  
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
   takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

console.log(alienShip.retreat()) // prints We no longer wish to conquer your planet. It is full of dogs, which we do not care for. undefined
console.log(alienShip.takeOff()) // prints Spim... Borp... Glix... Blastoff!



// Nested Objects 
// just like with nested loops, you can nest objects inside of other objects. 
let spaceship = {
  passengers: [{name: 'bebe diana'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  },
}; 

let capFave = spaceship.crew.captain['favorite foods'][0] // this runs through the spaceship variable, into the crew
let firstPassenger = spaceship.passengers[0]

console.log(capFave) // prints cookies
console.log(firstPassenger) // prints {name: "bebe diana"}


//Pass By Reference
// alr broe so basically objects are passed by reference, this in gorilla brain words means
// when a variable assigned to an object is passed into a function as an argument da compooter 
// thinks of the parameter name as the space in memory holding that object
// meaning that it can permanently mutate the object even if its a const variable
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'; // mutates from turbo fuel to avocado oil
}

let remotelyDisable = obj => { 
  obj.disabled = true; //this is now added to the object
}

greenEnergy(spaceship)
remotelyDisable(spaceship)

console.log(spaceship) // prints
/*
{ 'Fuel Type': 'avocado oil',
  homePlanet: 'Earth',
  disabled: true }
*/

//Looping through Objects
// the "for... in" iterator will iterate through each variable object
let spaceship = {
  crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};

// to read print read below first

// so if you read the code, for the variable "spaceship" is dipping in the "crew" object
// and in the console.log() the inside is .crew objects objects yk foo. so like it goes from crew->
// to every object in there so it would be captain, 'chief officer', medic, and translator, which then 
// uses the .name + .degree  properties to print out the following 

// prints
/*
captain: Lily
chief officer: Dan
medic: Clementine
translator: Shauna
Lily: Computer Engineering
Dan: Aerospace Engineering
Clementine: Physics
Shauna: Conservation Science 
*/


//Advanced Methods
// 'This'
// So basically like broe alr hold on i need to ok so basically broe some methods are not in direct access 
// to other properties in the other methods.
// we gotta use a .this to get access like this
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.` // so if we used ${robot.model} and ${robot.energyLevel} it would not work essentially
  }
};

console.log(robot.provideInfo()) //prints "I am 1E78V2 and my current energy level is 100."

//Arrow Functions and This
// so bro alr you basically cant access a this. object inside of a function so you can write it from this
const robot = {
  energyLevel: 100,
  checkEnergy: () => { // difference
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

// to this which will make the this. work
const robot = {
  energyLevel: 100,
  checkEnergy() { // difference
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();


//Privacy
// sometimes we dont want some code getting access to other code
// some langauges have privacy built in javascript makes you write it out
// we use an _underscore before the name of the property 
// also these private objects cannot be directly manipulated
const bankAccount = {
  _amount: 1000
}
bankAccount._amount = 1000000;
// this can be reassigned


//Getters
// methods that get and return the internal properties of an object
// getter + setter methods properties cannot share the same name as the getter/setter function
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if (typeof this._energyLevel === 'number'){ // we use an if with an argument to combine a string and object if true
      return `My current energy level is ${this._energyLevel}`
    } else { // this else statement is if the if is false
      return "System malfunction: cannot retrieve energy level";
    }
  }
};

console.log(robot.energyLevel) // prints My current energy level is 100


//Setters
// so basically you can reassign values of existing properties
// getter + setter methods properties cannot share the same name as the getter/setter function
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15, // original value
  get numOfSensors(){ // getter
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors; // returns numOfSensors
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){ // setter
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num; // reassignment here from 15 to 100
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }
  }
};
robot.numOfSensors = 100; // argument provided for numOfSensors object
console.log(robot.numOfSensors)



//Factory Function
// alr so basically these will create multiple objects at once/quickly
// these will take in a few parameters that are assigned to objects:
const robotFactory = (model, mobile) => {
  return {
    model : model, // parameter1
		mobile: mobile, // parameter2
		beep () { //function
      console.log('Beep Boop'); 
    }
	};
};

const tinCan = robotFactory('P-500', true);
tinCan.beep(); // calling function // prints 'Beep Boop'
console.log(tinCan.mobile) // prints 'true'

// Shorthand Version
// so we can make it a lil shawty by like idk writing the variable into a function
function robotFactory(model, mobile){
  return {
    model, // parameter1
    mobile, // parameter2
    beep() {
      console.log('Beep Boop');
    }
  }
}

const newRobot = robotFactory('P-501', false)
console.log(newRobot.model) // prints 'P-501'
console.log(newRobot.mobile) // prints 'false'


// Destructured Assignment
// so you can extract a certain a certain property from an object by making a variable
// and setting the property name equal to the object name :
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: { // we want to go into this neseted object-property thing 
    beep() { // and extract this property 
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } =  robot;
console.log(functionality.beep())


// Built-in Object Methods
// so basically broe theres like some things in here that have specific uses that are useful
// u can find some here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor
const robot = {
	model: 'SAL-1000', 
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot); // the .keys method returns an array of an objects string-keyed properties (the name of the properties)
console.log(robotKeys); // prints [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

const robotEntries = Object.entries(robot) // the .entries basiclly just prints everything inside of the object including property and value 
console.log(robotEntries) //[ [ 'model', 'SAL-1000' ],[ 'mobile', true ],[ 'sentient', false ],[ 'armor', 'Steel-plated' ],[ 'energyLevel', 75 ] ]{ laserBlaster: true,

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot); // basically adds a new property and value
console.log(newRobot); // prints { laserBlaster: true,voiceRecognition: true,model: 'SAL-1000',mobile: true,sentient: false,armor: 'Steel-plated',energyLevel: 75 }



// Iterators
// Higher Order Functions
// function as data: so basically if you have very long functions you can use another variable as something
// to store the function
const announceThatIAmDoingImportantWork = () => {
  console.log("I'm doing very important work!");
};
const busy = announceThatIAmDoingImportantWork; 
busy(); // This function call barely takes any space!

