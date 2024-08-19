// person class kno kichu accept korbe na
class Person {
  takeNap(): void {
    console.log("I am sleeping 8 hours per day");
  }
}

class Students extends Person {
  takeNap(): void {
    console.log("I am sleeping 10 hours per day");
  }
}
class Developers extends Person {
  takeNap(): void {
    console.log("I am sleeping 5 hours per day");
  }
}

const person1 = new Person();

const person2 = new Students();

const person3 = new Developers();

function getNap(param: Person) {
  param.takeNap();
}

getNap(person1);
getNap(person2);
getNap(person3);

//another example

class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

function getAreaofShape(param: Shape) {
  console.log(param.getArea());
}

getAreaofShape(new Circle(10));
getAreaofShape(new Rectangle(10, 12));
