/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: The value of "this" will be the window/ console object when in global scope.
* 2. Implicit Bind: When a function is called by a dot that preceeds it, that object is "this".
* 3. New Bind: Using a constructor function.
* 4. Explicit Bind: "this" is defined when JS's call is used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayGreeting(greeting) {
    console.log(this);
    return greeting;
}


// Principle 2

// code example for Implicit Binding
const greeterBot = {
    greeting: "Hola",
    sayGreeting: function() {
        console.log(this.greeting);
        console.log(this);
    }
}

greeterBot.sayGreeting();


// Principle 3

// code example for New Binding

function home(complimenter) {
    this.compliment = 'Nice shirt ';
    this.complimenter = complimenter;
    this.speak = function() {
        console.log(this.compliment + this.complimenter);
        console.log(this);
    };
}

const tito = new home ('Tito');
const eva = new home('Eva');

tito.speak();
eva.speak();

// Principle 4

// code example for Explicit Binding

const person = {
    name: 'Bad Bunny'
};

const talents = {
    talents1: 'rapper',
    talents2: 'music producer',
    talents3: 'all around cool guy'}

function intro() {
    console.log(`Hola, I am ${name}, and I ${talents.talent1}, also happen to ${talents.talents2} and lastly ${talents.talents3}.`)
}

intro();