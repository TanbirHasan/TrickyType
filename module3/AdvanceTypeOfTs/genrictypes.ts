

const rollNumbers : Array<number> = [3,5,2,6]



const rollNumbers2:string[] = ['3','5','6']

const boleanRoll : Array<boolean> = [false,true]


type objType = {
    name : string,
    address : string,
    email : string
}

const objectArray : Array<objType> = [
    {
        name : 'Karim',
        address : "ctg",
        email : 'karim@gmail.com'
    }
]





// akhane generic type use kora jai , dekha jacche amra bivinno type er array declare kortesi, to amra akta type create kore then bivinnno data Type create er shomoi use kora jai


type GenericArray<T> = Array<T>

const rollNumbersge : GenericArray<number> = [3,5,2,6]

const rollNumbers2ge:GenericArray<string> = ['3','5','6']

const boleanRollge : GenericArray<boolean> = [false,true]


////////////////////////


type GenericTuple<X,Y> = [X,Y]

const StringType : GenericTuple<string,number> = ['',6]


type InsideObjType = {
    name : string,
    age : number
}

// amra akhane object type ata type alias use na kore interface o use korte pari

interface InsideObjectTypesInterface {
    name : string,
    age : number
}

const objtype : GenericTuple<InsideObjectTypesInterface,string> = [{
    name : 'Karim',
    age : 34,

},
  'Real Madrid'
]


