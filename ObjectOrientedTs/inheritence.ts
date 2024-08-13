




class Combined {
    name : string;
    age : number;
    address : string;

    constructor(name : string, age:number, address : string){
        this.name = name;
        this.age = age;
        this.address = address
    }

    SleepingTime(hours:number) : string{
        return `This ${this.name} will sleep for ${hours}`
     }
}



// amra student k avabe define na kore caile Combined class theke property guli inherit kore Student class e nite pari.
// class Student {
//     name : string;
//     age : number;
//     address : string;

//     constructor(name : string, age:number, address : string){
//         this.name = name;
//         this.age = age;
//         this.address = address
//     }

//     SleepingTime(hours:number) : string{
//        return `This ${this.name} will sleep for ${hours}`
//     }
// }


class Student extends Combined {
    name : string;
        age : number;
        address : string;
    
        constructor(name : string, age:number, address : string){
          super(name,age,address)
        }
}


const student1 = new Student('Karim',23,'France')

class Teacher {
    name : string;
    age : number;
    address : string;
    designation : string;
    constructor(name : string, age : number, address : string, designation : string){
        this.name = name;
        this.age = age;
        this.address = address
        this.designation = designation
    }

    TeachersSleepTime(hours: number) : string{
        return `This ${this.name} will sleep for ${hours}`
    }

    takeClasses(session:number) : string{
       return `This ${this.name} will take ${session}`
    }
}