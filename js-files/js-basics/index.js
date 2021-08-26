console.log('hi my name javaScript ');
// object
let person= {
    firstName : "ali",
    age: 21
};
person.age +=1;

person["firstName"] = "a";
console.log(person);

// array is object
let selectedColors = ["red", "blue"];
// we can store different  type in array
selectedColors[2] = 2;
console.log(selectedColors);
console.log("first color is "+ selectedColors[0]);
console.log(selectedColors.length);

//function
function welcome(name , lastName){
    console.log("Hi "+ name +" "+ lastName);

}
welcome("ali","amer");

function square(number){
    return number * number;
}

let s =square(5);
console.log(s);
// true == , false == ... , just value
console.log(true == 10);
// value and type
console.log(1===1);

// if the user have more then 100 point give him a gold
// otherwise give him a silver ;
let point = 100;
//          cond ? if true do that : otherwise do that
let user = point >= 100 ? 'gold': 'silver';
console.log(user);

let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;
console.log(a+ " and  " + b);
// if ... else
let hour = 6;
if (hour >=6 && hour < 12)
    console.log("good morning");
else if(hour >= 12 && hour < 20)
    console.log("good after noon ");
else 
    console.log("good evening");


function greed(name){
    if (hour >= 6 && hour < 12 )
         return "good morning " + name;
    if (hour >= 12 && hour < 20 )
         return "good after noon " + name;
    else
        return "good evening " + name ;
}
console.log(greed("ali"))

// switch and case
function greedWithSwitch(name){
    switch(hour) {
        case (hour >= 6 && hour < 12 ):
            return "good morning " + name;
        case (hour >= 12 && hour < 20 ):
            return "good after noon " + name;
        default : 
            return "good evening " + name ;
    }
}
console.log(greedWithSwitch("ali"));

//for 
function forLoops(name){
    for(let i=0 ; i < 5 ; i++)
        console.log(name +" " + i);
    
}

forLoops("ali");

// while
function whileLoops(name){
    let i = 0
    while(i != 5){
        console.log(name +" " + i);
        i++;
    }
}
whileLoops("jeff");
// do while 
//let i =  0;
// do {(console.log("jeff amerson "+ i));
// i++;
// } while (i !=5);

// for in
 const username = {
     name : "ali",
     age : 21
 };
 for (let key in username)
        console.log(key, username[key]);
const number = ["j","f","e"];
for (let index in number)
console.log(number[index]);

//for- of 
for (let itemes of number){
    console.log(itemes);
}
function maxNumber(fristNumber , secondNumber){
    return Math.max(fristNumber, secondNumber);
}

console.log(maxNumber(8,7));

// constructor function
function createUser(username , password){
    return {
        firstName,
        makePassword(){
            if (password.length < 5)
                 console.log("invalid password");
            else
            console.log(password);
        }
    };
}

function User(name , password){
    this.name = name;
    this.password = password;
    this.makePassword = function(){}}