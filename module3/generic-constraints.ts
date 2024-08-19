

const createArray = <T>(param:T):T[] => {

    return [param]

}

type Name = {name : string}

const result = createArray<string>('Bangladesh')
const result2 = createArray<boolean>(true)
const result3 = createArray<Name>({name : 'bangladesh'})

const country = <X,Y>(param1:X,param2:Y):[X,Y] => {
    return [param1,param2]
}

const resultCountry = country('bd','ed')

// spread operator



const car = 'BMW'


type myInfoType = {
    name : string,
    age : number,
    other : boolean
}

const myInfo : myInfoType = {
    name : 'test',
    age : 24,
    other : false
    

}

const newData = {...myInfo,car}

type mandatory = {
    name : string, age : number,
}

const myCar = <T extends mandatory>(myinfo:T) => {
    const car = 'bmw';
    const newData = {...myinfo,car}
    return newData
}

const result5 = myCar(myInfo);


type personType = {
    name : string,
    age : number,
    address : string
}

type newType = 'name' | 'age' | 'address'

type newTypePersonKeyof = keyof personType

const a:newType = 'age'

function getProperty<X,Y extends keyof X>(obj:X,key:Y){
  obj[key]
}

const resultProperty = getProperty({name : 'ana', age : 34}, 'age')




