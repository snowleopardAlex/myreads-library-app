// What is the best practice, using CONST in render or STATE DIRECTLY?
// https://stackoverflow.com/questions/52251724/what-is-the-best-practice-using-const-in-render-or-state-directly
// https://stackoverflow.com/questions/42307735/destructuring-state-in-react-render

// USING CONST
import React, { Component } from "react";

class VehicleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicle: []
        };
    }

    componentDidMount() {
        axios.get(`/getDetails/${this.props.match.params.id}`)
          .then(response => {
              this.setState({ vehicle: response.data.vehicle });
          });
    }

    render() {
        // *
        const vehicle = this.state.vehicle;

        return (
            <div className="car-price-detail">
                <h2>{vehicle.title}</h2>
                <p>{vehicle.mileage}</p>
                <p>{vehicle.color}</p>
            </div>
        );
    }
} 

export default VehicleDetail;

// STATE DIRECTLY 

import React, { Component } from "react";

  class VehicleDetail extends Component {
      constructor(props) {
          super(props);
          this.state = {
              vehicle: []
          };
      }

      componentDidMount() {
          axios.get(`/getDetails/${this.props.match.params.id}`)
             .then(response => {
                 this.setState({ vehicle: response.data.vehicle });
             });
      }

      render() {
          // *
          return (
              <div className="car-price-detail">
                  <h2>{this.state.vehicle.title}</h2>
                  <p>{this.state.vehicle.mileage}</p>
                  <p>{this.state.vehicle.color}</p>
              </div>
          )
      }
  }

  // Directly using the state variable is a bad practice. If you want to change
  // the code in the future, you will have to change the state variable vehicle in
  // every single line wherever you are using it. It will also affect your code
  // maintenance. This is why we should use destructuring --> const { vehicle } = this.state;
  // With the destructuring you will have only a single line of change, that's a good practice. 

  // ADVANTAGES OF DESTRUCTURING: 
  // code looks much clener especially if you need to reuse state values multiple times in a component
  

  // DISADVANTAGES OF DESTRUCTURING:
  // if you're making a module or open sourcing your destructured statement might confuse other devs.



 // JAVASCRIPT TERNARY OPERATOR
 // https://www.javascripttutorial.net/javascript-ternary-operator/
 //  When you want to execute a block of code, if a particular test evaluates to TRUE, you often 
 // use the IF-ELSE statement. For example, if age is greater than 16, then allow the person
 // to drive can be coded as follows:
 
 const age = 19;
 const canDrive;

 if ( age > 16 ) {
     canDrive = "yes"
 } else {
     canDrive = "no"
 }
 
 // You can use ternary operator as the shortcut for the IF-ELSE statement as follows:

 const age = 19;
 const canDrive = age > 19 ? "yes" : "no";

 // The syntaxt of the ternery operator
 // Ternery operator is the only operator that takes three operands

 condition ? expression_1 : expression_2;

 // The condition is an expression that evaluates to a Boolean value, 
 // either TRUE or FALSE. If the condition is true, the ternary operator returns 
 // expression_1, otherwise it returns the expression_2. 
 // The expression_1 and expression_2 are expressions of any type. 

 // PERFORM MULTIPLE OPERATIONS
 // It's possible to perform multiple operations in each case of the ternary operator,
 // each operation is separated by a comma.

 const authenticated = true;
 const nextURL = authenticated ? (
     alert("You will redirect to admin page"),
     "/admin"
 ) : (
     alert("Access denied"),
     "/403"
 );

 // redirect to nextURL here
 console.log(nextURL); // "/admin"

// In this example, the returned value of the ternary operator is the last value in the comma-separated list.

// Simplify ternary operator

const locked = 1;
const canChange = locked != 1 ? true : false;

// If the locked is 1, then the canChange const is set to false, otherwise, it is set to true.
// You can simplify it by using a Boolean expression as follows:

const locked = 1;
const canChange = locked != 1;

// USE MULTIPLE JS TERNARY OPERATORS
const speed = 90;
const message = speed >= 120 ? "Too Fast" : (speed >= 80 ? "Fast" : "OK");

// Use ternary operator when it makes the code easier to read. If the logic 
// contains many if...else statements, you shouldn't use the ternary operators.

 // SET THE DEFAULT PARAMETERS FOR A FUNCTION in ES6
 // https://www.javascripttutorial.net/es6/javascript-default-parameters/

 // In JS, a parameter has a default value of undefined. It means that if you don't
 // pass the arguments into the function, its parameters will have the default
 // values of undefined.

 function say(message) {
     console.log(message);
 }

 say();

 // The say() function takes the message parameter because we didn't pass any 
 // argument into the say() function, the value of the message parameter is undefined. 

 // Suppose that you want to give the message parameter a default value 10
 // Typical way for achieving this is to test parameter value and assign a 
 // default if it is undefined:

 function say(message) {
     message = typeof message !== "undefined" ? nessage: "Hi";
     console.log(message);
 }

 say();

 // In the example above we didn't pass any value into the say() function, its default value 
 // is undefined. Inside the function, we reassigned the message variable the Hi string.

 // ES6 provides an easier way to set the default values for the parameters of a function as shown in the following syntax:

 function fn(param1=default1, param2=default2,..) {

 }

 // In the syntax above, you use the assignment operator (=) and the default value after the parameter name to set a default value for that parameter.

 function say(message="Hi") {
     console.log(message);
 }

 say(); // 'Hi'
 say(undefined); // 'Hi'
 say('Hello'); // 'Hello'

// In the first function call, we didn’t pass any argument into the say() function, therefore message parameter took the default value 'Hi'.
// In the second function call, we passed the undefined into the say() function, hence the message parameter also took the default value 'Hi'.
// In the third function call, we passed the 'Hello' string into the say() function, therefore message parameter took the string 'Hello' as the default value.

// THUMBNAIL
// https://stackoverflow.com/questions/51692323/google-books-api-cannot-read-property-thumbnail-of-undefined

// REGEX
// https://stackoverflow.com/questions/6828637/escape-regexp-strings

// UNDERSTANDING REGULAR EXPRESSION MATCHING WITH .test, .match, .exec, . search, .split
// https://ultimatecourses.com/blog/understanding-regular-expression-matching-with-test-match-exec-search-and-split
// https://www.youtube.com/watch?v=909NfO1St0A&list=PLXBpB4yr0FyzK1DGHwse4Dn3cymC3vYmI&index=50

// Regular Expressions (RegExp, RegEx) are used everywhere in JS.

// .EXEC() - it is similar to .match(), although it is the part of the string you were looking to
// match. For instance, If I wanted to search a string for the word "Todd", I could get it returned if it matches.

// Returs the matching pattern, almost "removing if from a string".
// /i --> not case senstive
 /todd/i.exec("Hello, my name is Todd Motto")

// .SEARCH() - similar to exec()  method, but using .search() will tell you the index value
// of where the match was found.

const str = "Hello, my name is Todd Motto";
str.search(/todd/i);

// SPLIT() - will cut your string into two or more pieces, great for splitting chunks of data, returns a new array.

"Hello, my name is Todd Motto".split(/\s/g);


// Similar tutorials
// https://www.youtube.com/watch?v=6sBqMyUOcl8&list=PLXBpB4yr0FyzK1DGHwse4Dn3cymC3vYmI&index=52
// https://reactjs.org/docs/handling-events.html

// ESLINT suggests to destructure the variable. 
// ESLINT - is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
// with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to 
// JSLint and JSHint with a few expectations: ESLint uses Espree for JS parsing. 


//::::::::::::::::::::::::::: BUGS ::::::::::::::::::::::::::::::: //

// BUG: When I choose the book from SEARCH PAGE and assign it to the shelf - it is sent there
// but when I come back to the SEARCH PAGE from MyReads page and when I click on the book 
// to see which shelf the book is currently on, the shelf shows me first option, i.e --> Currently Reading, not READ as 
// it supposed to be. 

// SOLUTION: The books returned by the search API do not have the shelf infromation. 
// These books do not know which shelf they are on. They are raw results only. 
// You will need to make sure that books have the correct state while on the search page. 
// TO FIX THIS: we can add the shelf information using currentlyReading, wantToRead and read state maintained in MyReads component.
// These states can be MOVED UP, inside App component, so that it can be passed to both MyReads and Search Books components. 

// SO FAR: 

// When you change from class component to functional component, remember that you 
// lose THIS keyword. 

// The ReferenceError object represents an error when a non-existent variable is referenced.
// ES2015 is the updated version of JavaScript (also known as ECMAScript). The more lax term for ES2015 is ES6.
// In ES2015, two other ways to declare variables were introduced. They are LET and CONST. 

// n X Is Not a Function TypeError typically occurs in one of the following three scenarios: 
// When a function call is made on a property of that simply isn't a function. 
// When a function call is made on an object type that doesn't contain that function or method.

