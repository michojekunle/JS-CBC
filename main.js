// // console.log("it works!");
// // console.log("Ayomide");

// // let num1 = +prompt("Enter first Number");

// // let num2 = +prompt("Enter second Number");

// // let result = num1 + num2 ;

// // console.log(result);


// // console.log(5 - "4")
// // alert(result);

// // const myName = "Ayo Mich.";
// // const age = 16;
// // const program = "FULL STACK WEB DEVELOPMENT";

// // let statement = "I am " + myName + + "I am " + age + ". I am taking a  " + program +" course @ CBC" 

// // num1 = 8;
// // num2 = 9;

// // console.log(String(num1)*String(num2));

// // num1 = 8;
// // num2 = '9';

// // console.log(num1 + num2);
// // console.log(true + true);

// // /*
// // //Exercise one

// // "534"
// // 1
// // 0
// // 5
// // JavaScript
// // "  "
// // 0
// // 2
// // 1
// // 1
// // -1
// // -1
// // NaN
// // */ 

// // /*
// // //Exercise Two
// // True
// // False
// // False
// // False
// // NaN
// // NaN
// // */

// // let firstName = "Ayomide";
// // let lastName = "Ojekunle";

// // let myFullNmme = firstName + " " + lastName ; 

// // var a = 34;
// // var b = 21;
// // a = 2;

// // console.log(a + b);

// // var c;
// // console.log(c)

// //String methods
// const fName = 'Benedict';
// const lName = 'Doe';

// let val;

// val = fName.substring(0, 3);

// //slice
// val = fName.slice(-2);

// //CharAt 
// val = lName.charAt(2);

// //split
// var statemnt = "Hey How are you";
// val = statemnt.split(" ")

// console.log(val.indexOf('are'));


// const word = "How are you"

// //includes
// val = word.includes('is')

// //replace
// val = word.replace('are', 'is');

// //Math functions
// val = Math.PI;

// let evaluate = 7;

// //ceil
// val = Math.ceil(2.2);

// //floor 
// val = Math.floor(2.8);

// //sqrt
// val = Math.sqrt(9);

// //abs
// val = Math.abs(-80);

// //power 
// val = Math.pow(8,2);

// //min 
// val = Math.random(1, 2, 8, 9);

// //max
// val = Math.max(2, 8, 9, 3);

// //round 
// val = Math.round(4.2);


// //math random
// val = Math.ceil(Math.random()*20);


// var b = 8;
// var c = 8;

// // console.log(c===b)

// // console.log(val);

// // //exercise 2
// // console.log(5 >= 1);
// // console.log(0 === 1);
// // console.log(4 <= 1);
// // console.log(1 != 1);
// // console.log('A' > 'B');
// // console.log('B' < 'C');
// // console.log('a' > 'A');
// // console.log('b' < 'A');
// // console.log(true === false);
// // console.log(true != true)

// // const id = "1";

// // if(id === 1) {
// //     console.log(true);
// // }
// // else {
// //     console.log(false);
// // }

// // const color = "red";

// // if(color === "red"){
// //     console.log("stop");
// // } else if (color === "amber") {
// //     console.log("Ready");
// // } else if (color === "green") {
// //     console.log("go");
// // } else {
// //     console.error("Your");
// // }

// // //if statements on driving a keyless car

// // let age = +prompt("How old are you");
// // console.log(age)

// // if (age < 18){
// //     alert("Sorry you are too young to drive. Powering off");
// // }else if (age === 18){
// //     alert("Congratulations!! on your first year of driving. Powering on");
// // }else if (age > 18 && age <= 60){
// //     alert("Enjoy your ride, Powering on");
// // }else if (age > 60){
// //     alert("You should retire from driving, Powering off");
// // } else {
// //     alert("Please Enter a valid Number");
// // }

// //Week one javascript project @CBC

// //1.  Program to calculate the area of a Triangle 
// //    Using the base and height value accepted as input from the user

// // const base = +prompt("Please, Enter the value for the base of your triangle");
// // const height = +prompt("Please, Enter the value for the height of your triangle");

// // let areaOfTriangle = 0.5 * base * height;

// // alert(`The Area of your triangle is ${areaOfTriangle}`);

// // //2. Guess a number 
// // //    A Program that generates a random number and prompts 
// // //    the user to guess and compares the user's input to the 
// // //    random number generated and alerts the user as to whether
// // //    the user guessed right or not.

// // const userInput = +prompt("Guess a number between 1 and 20");

// // let randomNumber = Math.ceil(Math.random()*20);

// // if(userInput === randomNumber){
// //     alert("Correct Guess");
// // }else {
// //     alert("Not Matched");
// // }

// //switch 

// const cocktail = prompt("Hey There!, What's your favourite cocktail");

// switch (cocktail.toLowerCase()) {
//     case 'martini':
//         alert('Senior Man choice!');
//         break;
//     case 'daiquiri':
//         alert('Good Taste!');
//         break;
//     case 'marijarita':
//         alert('Why so soft!');
//         break;
//     default:
//         alert('We do not have that here!');
//         break;
// }

// //Array
// let arr1 = [53430, 771, 8652, 3, 384, 847];

// //sort array 
// //s

// const birthday = new Date('8-15-2007 11:25:50');

//loop

//1. while loop 

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// var myArray = [];
// var i = 0;
// while (i <= 9){
//     myArray.push(i);
//     i++;
// }

// console.table(myArray);

// //for loop

// var myArray = [];


// //exercise
// const  myArray2 = [];
// let total = 0;

// for(let x = 1; x<myArray2.length;i+=2){
// }


// // const animals = ['rabbit', 'dog', 'goat'];

// // for (i=0;i<animals.length;i++){
// //     console.log(animals[i]);
// // }

// //foreach array method 
// // animals.forEach(function(animal, index) {
// //     console.log(animal, index);
// // })

// //Map
// const user = [
//     {
//         id:0,
//         username:'Samuel'
//     },
//     {
//         id:1,
//         username:'Janet'
//     },
//     {
//         id:2,
//         username:'Joshua'
//     }
// ];

// let arr = [];

// user.forEach(function(user){
//     console.log(user.id);

//     let temp = user.id;
    
//     arr.push(temp)
// })
// console.table(arr);


// const ids = user.map(function(user) {
//     return user.id;
// })

// // console.log(ids);

// const usernames = user.map(function(user){
//     return user.username;
// })

// console.log(usernames);

//For ..in
// const user = {
//     id: 0,
//     username: 'john',
//     age: 40
// }

// for (let x in user) {
//     console.log(user['username']);
// }


// const database = [
//     {
//         'username': 'AMD',
//         'password': 'michspassword'
//     },
//     {
//         'username': 'daylight',
//         'password': 'daylightspassword'
//     },
//     {
//         'username': 'mitty',
//         'password': 'mittyspassword'
//     },
//     {
//         'username': 'milly millz',
//         'password': 'millymillzspassword'
//     },
//     {
//         'username': 'amtnopz',
//         'password': 'amtnopzspassword'
//     },
//     {
//         'username': 'bro',
//         'password': 'brospassword'
//     }
// ]

// const newsfeed = [
//     {
//         'username': 'AMD',
//         'timeline': 'this is my first twitter mock up'
//     },
//     {
//         'username': 'daylight',
//         'timeline': 'daylightspassed the test'
//     },
//     {
//         'username': 'mitty',
//         'timeline': 'mittyspasswordbbg'
//     },
//     {
//         'username': 'milly millz',
//         'timeline': 'milly millz a mentor, a forex expert came down to lagos nigeria to help we nigerians.'
//     },
//     {
//         'username': 'amtnopz',
//         'timeline': 'amtnopz the best guy na my personal guyyyo'
//     },
//     {
//         'username': 'bro',
//         'timeline': 'na this bro be this'
//     }
// ]


// let username = prompt('Enter Your username');
// let password = prompt('Enter Your Password');

// let i;

// function validUser(username, password) {
//     let returnValue; 
//     database.forEach(function(user) {
//          if(user['username']===username && user['password']===password){
//               returnValue = true;
//          } 
//      })
//     return returnValue;
// }

// function timeline(usernameInput) {
//     newsfeed.forEach(function(user) {        
//         if(user['username']===usernameInput){
//             alert(`${user['username']} \n${user['timeline']}`);
//             console.log(user['username'], user['timeline'])
//         }
//     })
// }

// validUser(username, password);

// function signIn(username, password) {
//     if(validUser(username, password)){
//         timeline(username);
//     }
//     else 
//         alert('username or password incorrect')
// }

// signIn(username, password)

const user = {
    "firstName": 'AYO',
    "lastname": 'MICH',
    "subscription": 'exceptional',
}

const greet = (firstName, lastName) => {
    alert(`Hello ${firstName} ${lastName}`)
}

greet(user.firstName, user.lastname);

function person() {
    this.firstName = this.firstName
}