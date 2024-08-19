class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `This ${name} will sleep for ${hours}`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }

  // makeSleep(hours:number):string{
  //     return `This ${name} will sleep for ${hours}`
  // }
}

const student1 = new Student("Mr.X", 15, "Uganda");

class Teacher extends Parent {
  designation : string
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  makeSleep(hours: number): string {
    return `This ${name} will sleep for ${hours}`;
  }

  takeClasses(numOfClass: number): string {
    return `This ${this.name} will take ${numOfClass} class`;
  }
}


const teacher1 = new Teacher('Mr.Y',54,'USA','professor');
