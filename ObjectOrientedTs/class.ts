class Animal {
  // parameter properties , avabe constructor e call korle tahole ar opoere define kora lagbe na also this. avabeo bole deya lagbe na ata k bole parameterize properties
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German Shepar", "God", "Ghew");

dog.makeSound();
const cat = new Animal("Persian Cat", "Cat", "Mew");
