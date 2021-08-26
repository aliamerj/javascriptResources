console.log('this is classes , Hello  ');
// to check the code 
'use strict';
// to make private method by make it type symbol
const _radius = Symbol();
const _makeShape = Symbol();

class Circle{
    constructor(radius ){
        //private
        this[_radius] = radius;
    }

    // private method
    [_makeShape]() {
        return `drawing  with radius = ${this.radius}`;

    }

    draw(){
        console.log(_makeShape);
    }
    // Static methods
    static download(){
        console.log("download file");
    }


}

const c = new Circle(20);
c.draw();

// get Static methods
Circle.download();

// using weak map to make private 
const _size = new WeakMap();
const _maker = new WeakMap();
const _move = new WeakMap();
class Squire{
    constructor(size){
       _size.set(this, size);
       _maker.set(this,()=> `make the shape`);
    }
    set sitSize(size){
        if (size <= 0 ) throw new Error("invalid size");
         _size.set(this,size);
    }
    get getSize(){
        return _size.get(this);
    }

    draw(){
        console.log(`${_maker.get(this)()} and draw with size = ${this.getSize}`);
    }

}
const s = new Squire(0);
s.sitSize = 9;
s.draw();

// inheritance with classes

class Shape{
    constructor(color){
        this.color = color;
    }
    draw(){
        console.log(`drawing the shape with ${this.color} color`);
    }
} 

class CircleIn extends Shape{
    // you can use or not
    constructor(color , radius){
        super(color);
        this.radius = radius;
    }
    // method overriding just  reWrite method , 
    draw(){  
        super.draw();
        console.log(`drawing the circle shape with ${this.color} color and radius = ${this.radius}`);
    }
}

const circ = new CircleIn("black", 5);
circ.draw();
