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
var people = ['Jack', 'John', 'James'];
console.log(people);


// function which take a name and returns it without the first character
function removeFirstLetter(name) {
	console.log(name.substring(1));
};
removeFirstLetter("Richard");



/* function which returns the name without the first character, 
   but only if the name starts with a 'J' */
function onlyifJ(name) {
	console.log(name.replace('J', ""));
}
// testing both Richard and John to ensure it's only removing J's
onlyifJ("Richard");
onlyifJ("John");