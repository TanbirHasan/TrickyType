





// object type er data er khetre bebohar hoi, er subidha hsse aita extend kora jai, ati shoho object type er jnno

interface User{
  name : string,
  age : number
}

interface extendsUser extends User{
   
    role : string
}

/////////////////

type user = {
    name : string,
    age : number
}

type user2 = User & {
    role : string
}



const Newuser : User = {
   name : 'Andrew',
   age : 23
}


////////////

interface funcitonnumbers {
    (num1:number,num2:number) : number
}
type addNumberTypes = (num1:number , num2: number) => number

const addNumber: addNumberTypes = (num1, num2)  => {
    return num1 + num2
}
///////////////////

interface numbersroll {
    [index:number]:number
}

type rollnumberypes = number[]
const RollNumbers : number[] = [2,3,5]