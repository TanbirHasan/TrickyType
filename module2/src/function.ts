

function Test(num1:number,num2:number):number{
    let result = num1 + num2

    return result;

}

Test(3,5)


const callTest = (num1:number,num2:number):number => {
    let result = num1+num2;
    return result 
}

const arr = [3,4,5]

const newArray = arr.map((elem:number) => elem*elem )

const person : {
    name : string,
    balance : number,
    getBalance(money:number):number
} = {
    name : 'abul',
    balance : 4,
    getBalance(money:number){
        return this.balance + money
    }
}

