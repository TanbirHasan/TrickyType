

// interface user korar maddhome

interface IVehicle {
    name : string,
    model : string
}

const vehicle : IVehicle = {
    name : 'Car',
    model : '2'
}

// interface er maddhome class er shape bole deta pari...

interface RVehicle {
    startEngine(): void;
    stopEngine():void;
    move():void;
}

class Vehicel implements RVehicle {

    constructor(public name:string,
        public brand:string,public model:number){

        
    }
    startEngine(): void {
        console.log('starting')
    }
    stopEngine(): void {
        console.log('stopping')
    }
    move(): void {
        console.log('moving')
    }
    test(){
        console.log(`I am for testing purpose`)
    }
}

const vehicel1 = new Vehicel('Toyota','Toyota',2012)

//abstract class

abstract class Plane{
    constructor(public name:string,
        public brand:string,public model:number){

        
    }
    startEngine(): void {
        console.log('starting')
    }
    stopEngine(): void {
        console.log('stopping')
    }
    move(): void {
        console.log('moving')
    }
    test(){
        console.log(`I am for testing purpose`)
    }
}

// abstract dela oi class k follow kora jabe but instance create kora jabe na

class AllPlane extends Plane{
    test():void{
        
    }

}
const plane1 = new Plane('Boeing','343f',3432)