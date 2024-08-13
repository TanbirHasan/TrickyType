

type User = {
    name : string,
    age : number
}

type textedUser  = User & {
    role : string
}

const exampleUser:textedUser = {
    name : 'Karim',
    age : 20,
    role : 'User'
}


interface UserData {
    name : string;
    age : number
}


interface extendUser extends UserData{
    role : string
}

const userWithTypeAlias : User = {
    name : 'ana',
    age : 20
}

const user : extendUser = {
    name : 'bana',
    age : 34,
    role : 'test'
}

// function define by type alias and interface

// primitive type er khetre always type alias and object er khetre interface use korte hbe



type addNumberType = (num1:number,num2:number) => number;

const addNumbers : addNumberType = (num1,num2) => num1 + num2

interface addNumberInterface {
    (num1:number,num2:number) : number
}

type rollNum = number[]

interface IrollNum  {
    [index:number]:number
}

const rollNumbers : rollNum = [2,4,5]




type NumbersAdd = (num1:number , num2 : number) => number