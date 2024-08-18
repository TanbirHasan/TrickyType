

// generic type k force kora mane generic type k bole deya amar type ta amon amon hote hbe.....



type MyInfoType = {
    name : string,
    age : number,
    salary : number
}

const theinfo : MyInfoType = {
    name : 'Tanbir',
    age : 27,
    salary : 0
}




type MandatoryType = {
    name : string,
    age : number,
    salary : number
}

const TheCars = <T extends MandatoryType>(Info: T) => {
    const car = 'BMW'
    const newData = {...Info,car}
    return newData

}


