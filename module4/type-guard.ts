

// keyof guard

type Alpha = string | number

function add(num1:Alpha,num2:Alpha):Alpha{
    if(typeof num1 == 'number' && typeof num2 === 'number'){
        return num1 + num2
    }
    else{
        return num1.toString() + num2.toString()
    }


}

add(3,4);
add('three','four');


// in guard

type NormalUserType = {
    name : string
}
type AdminUserType = {
    name : string,
    role : 'admin'
}

function getUser(user:NormalUserType | AdminUserType):string{
    if('role' in user){
        return 'I am an Admin'
    }
    else{
        return 'I am normal user'
    }
}

const normalUserType : NormalUserType = {name : 'mr kallu'}
const adminUserType : AdminUserType = {name : 'mr allu',role : 'admin'}

console.log(getUser(normalUserType))


// instance of gurad

class AnimalType {
    name : string;
    species : string;

    constructor(name : string,species: string){
        this.name = name;
        this.species  = species;
    }

    makeSound(){
        console.log('making sound')
    }
}

class Dog extends AnimalType{
    constructor(name : string,species : string){
        super(name,species)
    }
    makeBark(){
        console.log('bark')
    }
}



class Cat extends AnimalType{
    constructor(name : string,species : string){
        super(name,species)
    }
    makeMeaw(){
        console.log('meaw')
    }
}

function isDog(animal:AnimalType):animal is Dog{
    return animal instanceof Dog
}


function getAnimal(obj:AnimalType){
    
   if(isDog(obj)){
    obj.makeBark()
   }
   else if(obj instanceof Cat){
    obj.makeMeaw()
   }
   else{
    obj.makeSound()
   }
}
const animal1 = new Dog('German','dog');

const animal2 = new Cat('meawcat','cat')

getAnimal(animal1)


