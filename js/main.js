// //chapter 4! decisions and loops.//
//SCROLL TO LINE 246 FOR FINAL CHAPTER EXERCISE.. REST OF CHAPTER PRACTICE LESSONS COMMENTED OUT


// //creating and controlling the  f l o w of data to handle different situations

// //using evaluations, decisions and loops


// //decision making.
// //flow charts help

// //comparison operators

// // ==    equal to
// // !     is not equal to
// //   ===    strict equal to  compares 2 values to check both data type and value are the same
// // ! == strict not equal to   ompares 2 values to check both data time and value are NOT the same

// // remember elementary math?
// //   >    greater than number on right
// // <   less than number on right

// //   >= greater than or equal to
// //   <= less than or equal to

// //in any condition there is usually one operator and two operands. 
// //the operands are placed on the side of the operator.
// // they can be values or variables. you often see expressions enclosed in brackets.

// (score >= pass)
// //score is the operand
// // pass is the operand 
// // comparison operator is the greater than or equal to
// // so this statement says the scoore is greater than or equal to the pass 

// var pass = 50; // pass mark grade
// var score = 90; // score

// // check if user has passed
// var hasPassed = score >= pass

// //write it into page
// var el = document.getElementById("answer");
// el.textContent = "Level passed: " + hasPassed

// //using expressions with comparison operators
// //operands do not have to be a single value

// //((score1+ score2) > (highScore1 + highScore2))

// var score1 = 90 //Round 1 score
// var score2 = 95 //round 2 score
// var highScore1 = 75 // round 1 High score
// var highScore2 = 95 // round 2 high score

// //check if scores are higher than current high scores
// var comparison = (score + score2) > (highScore1 +  highScore2)

// //write the message into the page
// var el = document.getElementById("answer");
// el.textContent = "New high score: " + comparison

// //logical operators. 
// // && logical AND --- tests more than one condition ie ((2<5) && ( 3 >= 2))
// // || logical OR  ---- tests at least one condition
// // ! logical NOT --- takes a single Boolean value and inverts it ie !(2 < 1)
// // ! reverses the state of an expression

// //short circuit evaluation
// //logical expressions eval left to right

// var score1 = 8 // round 1 score
// var score2 = 8 //round 2 score
// var pass1 = 6 //round 1 pass mark
// var pass2 = 6 //round 2 pass mark

// //check whether user passed both rounds, store result in variable
// var passBoth = (score1 >= pass1) && (score2 >= pass2)

// //create mssage

// var msg = "Both rounds passed: " + passBoth;

// //write the message into the page

// var el = document.getElementById("answer");
// el.textContent = msg

// //using logical  or & logical not

// var score1 = 8 //round 1 score
// var score2 = 8 //round 2 score
// var pass1 = 6 //round 1 pass mark
// var pass2 = 6 // round 2 pass mark

// // Check whether user passed one of the two rounds, store result in variable
// var minPass = ((score1 >= pass1) || (score2 >= pass2))
//  //create message
//  var msg = "Resit required: " + !(minPass)

//  //write the message into the page
//  var el = document.getElementById("answer")
//  el.textContent = msg

//  //if statements - if statements checks/evaluates a condition. if true, any code in following code block is executed

//  // if (score >= 50) {
//  // 	congratulate ();
//  // 	//code to execute if value is true
//  // }

// var score = 75 //score
// var msg;       //message

// if (score >= 50) { //if score is 50 or higher
// 	msg = "Congratulations!";
// 	msg += " Proceed to the next round.";
// }
// var el = document.getElementById("answer")
// el.textContent = msg;

// //if...else checks condition.
// //if it's true the first code block is executed
// //if it's false the second block is run instead

// var pass = 50 // pass mark
// var score = 75 //current score
// var msg;

// // select message to write based on score

// if (score >= pass) {
// 	msg = "Congratulations you passed!"
// } else {
// 	msg = "Have another go!"
// }

// var el = document.getElementById("answer");
// el.textContent = msg;


// // switch statements
// // switch value:  possible value for this variable and the code that should run if it matches

// //whole statement will live in one code block {set of curlies} and colon separates the option from the statements
// //at the end of each case is the 'break' keyword, which tells JS the switch is done


// //using switch statements:

// // var msg; // message
// // var level = 2  //level

// // //determine message based on level

// // switch (level) {
// // case 1: 
// // 	msg = "Good luck on the first test";
// // 	break;

// // case 2:
// // 	msg = "Second of three - keep going!";
// // 	break;

// // case 3:
// // 	msg = "Final round, almost there!";
// // 	break;

// // default:
// // 	msg = "Good luck!";
// // 	break;
// // }

// // var el = document.getElementById("answer");
// // el.textContent = msg;

// //*revisit truthy and falsy later on... *//


// //LOOPS
// //loops check a condition. if true - code block runs. and checked again, if still true, runs again.
// //loops repeat until condition returns false.
// //3 components:
// //for - if you need to run code a specific number of times, use a FOR loop
// //while - for when you don't know how many time the code should run -- use WHILE
// //do while - will always run in curly brackets even if false
// //exaple ..    for (var i = 0; 1 < 10; i++) { document.write(i);}
// //loop counters
// // var i = 0; //initialization ---- set var to 0, commonly referred to as i, acts as counter
// // i < 10; // condition - will run until specified #
// // i ++ //update

// //practice//
// //using for loops

// var scores = [24,  32, 17] //array of scores
// var arrayLength = scores.length //items in array
// var roundNumber = 0 //current round
// var msg = ""
// var i

// // loop through the items in the array

// for (i = 0; i < arrayLength; i++) {
// 	//arrays are 0 based so 0 is round 1
// 	roundNumber = (i + 1);

// 	//write the current round to the mssg
//  	msg += "Round" + roundNumber + ": ";

//  	//get the score from the scores array

//  	msg += scores[i] + "<br />";
//  }

//  document.getElementById("answer").innerHTML = msg;


// //While Loop practice using multiples of 5

// var i = 1  // sets counter to one
// var msg = "" //message
// //store 5 times table in variable
// while (i < 10) {
// 	msg += i + " x 5 = " + (i * 5) + "<br />"
// 	i++;
// }
// document.getElementById("answer").innerHTML = msg;

// //using Do While loops

// var i = 1 // Set counter to 1
// var msg = "" //message

// //store 5x in a variable

// do { 
// 	msg += i + " x 5 = " + (i * 5) + "<br />"
// 	i++;
// } while ( i < 1 );

// document.getElementById("answer").innerHTML = msg;

/////////////////////////////////////////////////////////////////////

//FINAL PRACTICE FROM CHAPTER 4: DECISIONS & LOOPS.
//COMMENTED OUT PREVIOUS EXERCISES FIRST

var table = 3   //unit of table
var operator = "addition" //type of calculation
var i = 1       //sets counter to 1
var msg = "" // message

if (operator === "addition") {  //if the operator variable says addition
	while (i < 11) {     		//while counter is less than 11
		msg += i + " x " + table + " = " + (i * table) + "<br />"   // calculation 
		i++;
	}
}

//write message into page
var el = document.getElementById("blackboard")
el.innerHTML = msg;
