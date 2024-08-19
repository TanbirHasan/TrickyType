

type Noob = {
    name : string
}


// type midNoob = {
//     name : string,
//     expertise :  string,
//     exp : number
// }

// intersection
type midNoob = Noob & {
    expertise :  string,
    exp : number
}

// const newDev : Noob | midNoob = {
//     name 'abul',
//     expertise : 'skil',
//     exp : 4
// }



