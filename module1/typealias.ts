

// type alias

type Crush = {
    name:string,
    profession : string,
    age:number,
    address:string
}

const crush1: Crush = {
    name : 'Tanbir',
    profession : 'next level developer',
    age:28,
    address: 'Dhaka'
}

type CrushMarriedType = boolean

const isCrushMarried : CrushMarriedType = false

const calculate = (num1:number , num2:number,operation:(x:number,y:number) => number) => {
    return operation(num1,num2);
}

calculate(10,30,(x,y) => x+y)