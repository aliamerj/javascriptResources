console.log("here is array");
// make array
const number = [3,4];
// in the end of list
number.push(5,6);
// in the beginning 
number.unshift(1);
// in the middle -> indexOf place , delate , the element 
number.splice(1,0,2);

console.log(number);

// find obj
const courses =[
    {id: 1 , name:"HTML"},
    {id: 2 , name : "CSS"},
    {id: 3 , name : "JavaScript"}
];
//return obj that you find
const courseFind = courses.find(function(course){
    return course.name == "CSS"
});
console.log(courseFind);
// return index of obj that you find

const courseIndexFind = courses.findIndex(function(course){
    return course.name == "CSS"
});

console.log(courseIndexFind);
// best way to write this using Arrow
// we have one paramater go to this code and comparing
const arrowFunction = courses.find(course => course.name == "CSS"); 
// Removing Elements 
// in the end of list
courses.pop();
// in the beginning 
number.shift();
// in the middle -> starting from ,  how many element that you want to delete
number.splice(1,2);


// combine two array  using cancat or ....
const list1 = [1,2,3];
const list2 = ["ali", "amer"];
const combine =list1.concat(list2);
console.log(combine);

const combineWithS = [...list1,"abc:" ,...list2];
console.log(combineWithS);
// cut up to 2 array by using slice(start from index , finish in index ) or (just finish one) or 
const slice = combine.slice(3);
console.log(slice);

// Iterating an Array
const array = [1,2,3];
let iter =array.forEach((number, index )=> console.log(`the index ${index} = ${number}`));
console.log(iter);

//join 
let title = 'join in javascript'
const https =title.split(' ').join('/');
console.log(`https://website/topic/${https}`);

// check the if element some use some()or all of then use every()
const atLeastOnePositive = array.some(value => value >= 0);
console.log(atLeastOnePositive);
// we can put infinite args in
function sum(...args){
    return args.reduce((a , b)=> a + b);

}
console.log(sum(1,2,3,4,5,6,7,8,9,10));

// give default value to parameter in function
function insert(first,secund = 5){
    return first+secund;
}
console.log(insert(1));


 
 


