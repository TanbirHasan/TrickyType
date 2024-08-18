

const arrayOfNumbers = [1,2,2]

const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());


type Area = {
    height : number,
    width : number
}

type AreaString = {
    height : string,
    width : string
}


type AreaReadOnly = {
    readonly height : number,
    readonly width : number
}
const rectangulerArea : Area = {
    height : 10,
    width : 30
}


rectangulerArea.height



type AB = Area['height'] // looked up types

type B = keyof Area

/// avabe bar bar type k change na kore map kore akshathe shb rokm type define kore deya jai , akhane akbar amar number area lagtest tokhn type number area define korsi abar string area lagtest
// tokhn abar string area use kortesi abar readonly use kora lagtese tokhn abar readonly use kortsi avabe kore na kore amra caile readonly kore use korte pari

type volume = {
    height : number,
    width : string,
    depth : number
}

type vomlumekey = keyof volume


type AreaMapType = {
    [k in vomlumekey] : volume[k]
}


// ai oporer part k jdi generic korte hoi




type volumeGeneric<T> = {
    [key in keyof T] : T[key]
}

const volume1:volumeGeneric<{name : string,age: number}> = {
   name : "karim",
   age : 23,

}