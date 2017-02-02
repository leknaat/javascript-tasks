// setting up variables
var firstName = "Richard";
var lastName = "Gill";



// printing to console
console.log(firstName + " " + lastName);



/* setting up functions to print to the console
   i could have made them variables but i wasn't sure if i 'should' */
function firstNameLastName(firstName, lastName) {
	console.log(firstName + " " + lastName);
};

firstNameLastName(firstName, lastName);

function lastNameFirstName(lastName, firstName) {
	console.log(lastName + ", " + firstName);
};

lastNameFirstName(lastName, firstName);



// finding the length of the var when the string is "Richard"
var firstName = "Richard";
firstName.length;



// creating the array of people and then printing to console
var array = ['Jack', 'John', 'James'];
var people = array.join("\n");
console.log(people);


// function which take a name and returns it without the first character
function removeFirstLetter(name) {
	console.log(name.substring(1));
};
console.log("Remove first letter test.");
removeFirstLetter("Richard");


/* function which returns the name without the first character, 
   but only if the name starts with a 'J' */
function onlyIfJ(name) {
	if (name.charAt(0) == "J") {
	console.log(name.replace('J', ""));
	} else {
		console.log(name);
	}
};
// testing both Richard and John to ensure it's only removing J's
console.log("J test. Passing Richard to ensure it's working as intended.");
onlyIfJ("Richard");
onlyIfJ("John");



/* function which takes a name and returns the name without the first character, 
   but only if the name starts with a 'J'. 
   If the name starts with an 'R' remove the last two characters. */
 function jAndR(name) {
 	if (name.charAt(0) == "J") {
 			console.log(name.replace('J', ""));
 	} else if (name.charAt(0) == "R") {
 		console.log(name.slice(0, -2));
 	} else {
 		console.log(name);
 	}
 };
 
 // amd we test here
console.log("Tricky! Testing to ensure it removes the J in john, last two characters if R, and doesn't touch any other names.");
jAndR("John");
jAndR("Richard");
jAndR("Kayla");