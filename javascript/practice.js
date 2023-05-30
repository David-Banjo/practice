// let x = toCelcuis(77);
// console.log(x)

// function toCelcuis(f) {
//     return (5/9) * (f - 32 )
// }



// let value = "the temperature is " + toCelcuis(77) + " celcuis"
// console.log(value)

// function toCelcuis(farenheit) {
//     return (5/9) * (farenheit - 32)
// }




// let text = "outside: " + typeof carName;
// document.getElementById('demo').innerHTML = text;


// function dread() {
//     let carName = "volvo";
    
//     let text = "inside: " + typeof carName + " " + carName;

//     document.getElementById('demo1').innerHTML = text;
// }

// dread();





// variable practice

// let firstName = "david "

// let lastName = "Banjo"

// let fullName = firstName += lastName;

// console.log(fullName)





// contatenate two strings in a function

// let namel = "Linda"

// let greeting = "Hi there"

// function dread() {
    
//     console.log(greeting + ", " + namel + "!")
// }

// dread();




// increment and decrement

// let myPoint = 3;

// function add3Points() {
//     myPoint += 3;
// }

// function remove1Point() {
//     myPoint -= 1;
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoint)




// strings and numbers

// console.log("2" + 2);
// console.log(11 + 7);
// console.log(6 + "5")
// console.log("My point: " + 5 + 9)
// console.log(2 + 2)
// console.log("11" + "14")





//passenger counter 

// let savel = document.getElementById('save-el')
// let countl = document.getElementById('demo')

// let count = 0;


// function increment() {
//     count += 1;
//     countl.innerHTML = count;
// }


// function save() {

//     let countStr = count + " - ";

//     savel.textContent += countStr;

//     countl.textContent = 0;

//     count = 0;

// }





// // rendering an error message

// let errorPragraph = document.getElementById('error')


// function purchase() {
//     console.log("button clicked")

//     errorPragraph.textContent = "Something went wrong, please try again later"
// }







// // Calculator Challange

// let num1 = 8

// let num2 = 2


// document.getElementById('num1').textContent = 8
// document.getElementById('num2').textContent = 2


// let sumEl = document.getElementById('sum-el')


// function add() {
//     let total = num1 + num2

//     sumEl.textContent = "Sum: " + total
    
//     console.log('add clicked')
// }


// function substract() {
//     let total = num1 - num2

//     sumEl.textContent = "Sum: " + total
    
//     console.log('substract clicked')
// }

// function divide() {
//     let total = num1 / num2

//     sumEl.textContent = "Sum: " + total
    
//     console.log('divive clicked')
// }

// function multiply() {
//     let total = num1 * num2

//     sumEl.textContent = "Sum: " + total
    
//     console.log('add clicked')






// let firstCard = 10

// let lastCard = 11

// let sum = firstCard + lastCard

// let middleCard = false

// if (sum < 21) {
//     console.log("you're a almost a winner 🙂")
// } else if (sum === 21) {
//     console.log("you are a winner 🥳")
//     middleCard = true
// } else {
//     console.log("you are a loser 😭")
// }

// console.log(middleCard)





// let age = 22

// if(age < 21) {
//     console.log("you are not allowed to enter the club")
// } else {
//     console.log("welcome")
// }


// let age = 100

// if(age < 100) {
//     console.log("not elegible")
// } else if (age === 100 ){
//     console.log("Here is your birthday card from the king!")
// }else {
//     console.log("you have already gotten")
// }

// console.log(4 === 3) // false
// console.log(5 > 2)  // true
// console.log(12 > 12) // false
// console.log(3 < 0)  // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)  // false







// let firstCard = 10;

// let lastCard = 1;

// let cards = [firstCard , lastCard];

// let sum = firstCard + lastCard ;

// let hasBlackJack = false;

// let isAlive = true;

// let message = "";

// let messageEl = document.getElementById('message-el');

// let sumEl = document.getElementById('sum-el');

// let cardEl = document.getElementById('card-el');


// function startGame() {
//     renderGame();
// }


// function renderGame() {
    
//     cardEl.textContent = "Card:" + cards[0] + " " + cards[1];
//     sumEl.textContent = "Sum: " + sum;

//     if(sum <= 20) {
//         message = "do you want to get another card?";
//     }else if(sum === 21) {
//         message = "you have won blackjack";
//         hasBlackJack = true;
//     }else{
//         message = "you are out of the game";
//         isAlive = false;
//     }
    
//     messageEl.textContent = message;
// }


// function newCard() {
//     console.log("getting new card from the deck");
    
//     let card = 5;

//     sum += card;

//     renderGame();
    
// }

// let sentence = ["hello", "my", "name", "is", "per"]

// let Greeting = document.getElementById('greeting-el')


// for (let i = 0; i < sentence.length; i++) {
//     Greeting.textContent += sentence[i] + " ";
// }



































// let firstCard = 10

// let lastCard = 1

// let cards = [firstCard , lastCard]

// let sum = firstCard + lastCard

// let hasBlackJack = false

// let isAlive = true

// let message = ""

// let messageEl = document.getElementById('message-el')

// let sumEl = document.getElementById('sum-el')

// let cardEl = document.getElementById('card-el')




// function startGame(){

//     renderGame()
// }

// function renderGame() {
    
//     cardEl.textContent = "Card: ";
   
//     for (let i = 0; i < cards.length; i++) {
//          cardEl.textContent += cards[i] + " ";
//     }

//     sumEl.textContent = "Sum: " + sum

//     if(sum <= 20) {
//         message = "do you want another card"
//     }else if(sum === 21) {
//         message = "you got a blackjack"
//         hasBlackJack = true
//     }else{
//         message = "you are out of the game"
//         isAlive = false
//     }

//     messageEl.textContent = message
// }


// function newCard() {
//     console.log("getting new card from the deck")

//     let card = 2;

//     sum += card;

//     cards.push(card)
//     console.log(cards);

//     renderGame()
// }





























// "use strict";

// let id = (id) => document.getElementById(id);

// let classes = (classes) => document.getElementsByClassName(classes);


// let username = id("username"),
//     email = id("email"),
//     password = id("password"),
//     form = id("form"),
//     errorMsg = classes("error"),
//     failureIcon = classes("failure-icon"),
//     successIcon = classes("success-icon");


//     form.addEventListener("submit", e => {
//         e.preventDefault();
  
//         engine(username, 0 , "Enter your username");
//         engine(email, 1 , "Enter your email");
//         engine(password, 2 , "Enter your password")

//     });


//     let engine = (id, serial, message) => {

//         if(id.value.trim() === "") {
//            errorMsg[serial].innerHTML = message;
//            failureIcon[serial].style.opacity = "1";
//            successIcon[serial].style.opacity = "0";
//          }else{
//             errorMsg[serial].innerHTML = "";
//            failureIcon[serial].style.opacity = "0";
//            successIcon[serial].style.opacity = "1";
//          }

//          let passwordLength = id.value.trim().length

//          if(passwordLength === 0){
//             errorMsg[serial].innerHTML = message;
//             failureIcon[serial].style.opacity = "1";
//             successIcon[serial].style.opacity = "0";
//          }else if(passwordLength >=0 && passwordLength <=6){
//             errorMsg[serial].innerHTML = "weak password";
//             failureIcon[serial].style.opacity = "1";
//             successIcon[serial].style.opacity = "0";
//          }else if(passwordLength >=6 && passwordLength <=8){
//             errorMsg[serial].innerHTML = "strong password";
//             failureIcon[serial].style.opacity = "1";
//             successIcon[serial].style.opacity = "0"; 
//          }else{
//             errorMsg[serial].innerHTML = "stronger password";
//             failureIcon[serial].style.opacity = "0";
//             successIcon[serial].style.opacity = "1"; 
//          }
//     }



    































// 'use strict';


// let id = (id) => document.getElementById(id);

// let classes = (classes) => document.getElementsByClassName(classes);


// let username = id('username'),
//     email = id('email'),
//     password = id('password'),
//     form = id('form'),
//     errorMsg = classes('error'),
//     failureIcon = classes('failure-icon'),
//     successIcon = classes('success-icon');



//     form.addEventListener('submit', e => {
//         e.preventDefault();


//         engine(username, 0 , "Enter your username");
//         engine(email, 1, "Enter your email");
//         engine(password, 2, "Enter your password");

//     });


//     let engine = (id, serial, message) => {
//         if(id.value.trim() === "") {
//             errorMsg[serial].innerHTML = message;
//             failureIcon[serial].style.opacity = "1";
//             successIcon[serial].style.opacity = "0";
//          }else{
//              errorMsg[serial].innerHTML = "";
//              successIcon[serial].style.opacity = "1";
//              failureIcon[serial].style.opacity = "0";
//          }


//          let passwordLength = id.value.trim().length;

//          if(passwordLength === 0) {
//             errorMsg[serial].innerHTML = message;
//             failureIcon[serial].style.opacity = "1";
//             successIcon[serial].style.opacity = "0";  
//          }else if(passwordLength >= 0 && passwordLength <= 6) {
//             errorMsg[serial].innerHTML = "weak password";
//             failureIcon[serial].style.opacity = "1";
//             successIcon[serial].style.opacity = "0";
//          }else if(passwordLength >= 6 && passwordLength <= 8) {
//             errorMsg[serial].innerHTML = "strong password";
//             failureIcon[serial].style.opacity = "1";
//             successIcon[serial].style.opacity = "0";
//          }else{
//             errorMsg[serial].innerHTML = "stronger password";
//             failureIcon[serial].style.opacity = "0";
//             successIcon[serial].style.opacity = "1";
//          }

       
//     }









    



    


















let text = "apple,banana,mango,orange,grapes";

let part = text.slice(19,25);

console.log(part)

















// "use strict"



// let id = (id) => document.getElementById(id);

// let classes = (classes) => document.getElementsByClassName(classes);


// let day = id("day"),
//     month = id("month"),
//     year = id("year"),
//     form = id("form"),
//     errorMsg = classes("error");


//     form.addEventListener("submit" , e => {
//         e.preventDefault();

//         engine(day , 0 , "Enter a valid day");
//         engine(month , 1 , "Enter a valid month");
//         engine(year , 2 , "Enter a valid year");


//     });


//     let engine = (id, serial , message) => {
         
//         if(id.value.trim() === "") {
//             errorMsg[serial].innerHTML = message;
//         }else{
//             errorMsg[serial].innerHTML = "";
//         }

//             let day = id.value.trim().length;

//             if(day === 0) {
//                 errorMsg[serial].innerHTML = message;
//             }else if(day <=0 === day <=31) {
//                 errorMsg[serial].innerHTML = "weak"
//             }else{
//                 errorMsg[serial].innerHTML = "";
//             }
            

        
//     }
































