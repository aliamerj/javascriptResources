console.log("this is prototype");

function Circle(radius){
    // instance members
    this.radius = radius;
    this.move = function(){
        this.draw();
        console.log("move")
    }
}
// prototype members
Circle.prototype.draw = function(){
    this.move();
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.toString = function(){
    return  `circle with radius ${this.radius}`;
}

// inheritance 
function Shape(color , shapeName){
    this.color = color;
    this.shapeName = shapeName

}

Shape.prototype.drawShape= function(){
    console.log(`drawing with ${this.color} color` );
}
Shape.prototype.moveShape = function(){
    console.log(`move the ${this.shapeName}` );
}
// Extend method
function extend(Child , Parent){
    
    // made the extend
    Child.prototype = Object.create(Parent.prototype);
    // resetting the constructor to owen object
    Child.prototype.constructor = Child;
}

function CircleShape(radius , color){
   Shape.call(this, color,'circle' );
    this.radius = radius;
    
}
extend(CircleShape,Shape);

function Square(size , color){
    Shape.call(this,color,"square");
    this.size = size;


}
extend(Square,Shape);



const cir = new CircleShape(1, "red");
const squ = new Square(2 ,"blue");

// mixin
const canEat = {
     eat : function(){
         console.log("eating ");
     }
}
const cantSwim = {
    swim : function(){
        console.log("swimming");
    }

}
const cantWalk = {
    walk : function(){
     console.log("walking");
    }
}
function mixins(Animal, ...properties){
    Object.assign(Animal.prototype , ...properties);
}

function Person(){

}
mixins(Person,canEat,cantWalk);

function Fish(){

}
mixins(Fish,canEat,cantSwim);
const f = new Fish();
const p = new Person();