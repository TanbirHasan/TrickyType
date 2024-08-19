

// function
function add(num1:number,num2:number):number{
    return num1+num2
}

const arrowAdd = (num1:number,num2:number) => num1 + num2

// array type dea function

const arr = [1,3,4]

const newArray = arr.map((elem:number) => elem * elem)

// object dea function

const person:{
    name:string,
    balance:number,
    addBalance(money:number ) : number
} = {
    name : 'Mezba',
    balance : 5,
    addBalance(money:number){
        return this.balance + money
    }
}

