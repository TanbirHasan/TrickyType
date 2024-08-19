




type PersonType = {
    name : string,
    age : number,
    address : string
}

type newType = 'name' | 'age' | 'address'

type newKeyof = keyof PersonType

const a : newType = 'name'

const b : newKeyof = 'name'

////////////////////////


// akhane amra generic use kore akta object and oi object er akta key parameter hishebe patahaisi kintu akahne jotokhhn na amra Y extends keyof X ata bolbo na tototkkhn ts bujhbe na j ai jaiagai
// oi exact key ta use hbe

function getProperty<X,Y extends keyof X>(objvalue:X, keyvalue:Y){
    return objvalue[keyvalue]
}


const property = getProperty({name : "mr.d",age:34}, "age")

