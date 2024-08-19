
// generic types in arrow function


const normalFunction = (value:string[]) : string[] => {
    return value
}


const createArray = <T>(params:T):T[] => {
   return [params]
}

const createArray2 = <X, Y>(params1: X,params2: Y): [X,Y] => {
    return [params1,params2]
}


const result1 = createArray<string>('Bangladesh')
const result2 = createArray<boolean>(false)

type Name = { }


const result3 = createArray2<string,number>('USA',23)



// spread Operator

const car = 'BMW'

const myInfo = {
    name : 'Tanbir',
    age : 27,
    salary : 0
}



let newData = {...myInfo,car}

const BuyCars = <T>(Info: T) => {
    const car = 'BMW'
    const newData = {...Info,car}
    return newData

}

// akhane compile time e jeehtu spread kortesi typescript object er value guli pabe na ata k generic dea define krote hbe tarpor ts oject er shb properties er access pabe


const result5 = BuyCars(myInfo);
result5.name