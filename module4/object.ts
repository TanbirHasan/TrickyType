class Animal {

    // parameter properties
    constructor(public name:string,public  species : string, public sound : string){
  
    }

    public makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal('German Shepard', 'dog', 'Grr Grr');

dog.makeSound();
