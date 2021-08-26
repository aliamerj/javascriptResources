console.log("hi here is object");
// create obj from object syntax
const circleObj = {
    radius : 1,
    location : {
        x : 1,
        y : 2
    },
    isVisible : true,
    draw : function(){
        console.log("drawing")
    }
};
circleObj.draw();

// create obj from factory function
function creatCircle(radius){
    return {
        radius,
        draw(){
            console.log("drawing with " + radius);
        }
    };
}
const circle1 = creatCircle(5);
circle1.draw();

const circle2 = creatCircle(3);
circle2.draw();

// create obj using Constructor Function 
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log(`drawing with  ${radius}`);
    }
}
const cir = new Circle(10);
cir.draw();

// add property or function to obj syntax

// const == we can not reassign exist property but we can delate or add new property
const user = {
    age : 21
};

user.name = "ali";
console.log(user);
user.ageInDay = function(){
    console.log(age * 350);
}
console.log(user);

// add property or function to obj syntax
delete user.ageInDay;
console.log(user);

// enumerating properties of an Object
for (let key in user)
    console.log(key);
for (let key of Object.keys(user))
    console.log(key);

    // return key and value as in  array
    // ["name" , "ali"] , ["age" , 21]
for (let entry of Object.entries(user))
    console.log(entry);

//clone Object in empty obj {} , from user object
const anotherUser = Object.assign({},user);
console.log(anotherUser);

//  or exist obj
const anotherUserWithExist = Object.assign({email :"ali@gmail.com"},user);
console.log(anotherUserWithExist);

 

//     clone all property 
const another = {...user};
console.log(another);