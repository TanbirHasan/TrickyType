

type crush = {
    name : string,
    age : number,
    address  : string
}

const crush1 : crush = {
    name : 'ana',
    age : 34,
    address : 'tuktuk'

}

type OperationType = (x:number,y:number) => number


const calculate = (number1:number,number2:number,oparation:OperationType) => {
    return oparation(number1,number2)
}

calculate(10,34,(x,y) => x+ y)
calculate(45,34,(x,y) => x- y)