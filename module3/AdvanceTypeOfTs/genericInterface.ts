

// Generic Interface

interface CrushInterface<T,U = undefined> {
    name : string
    husband : T,
    wife ? : U
}

const crush1: CrushInterface<boolean> = {
    name : 'Lorina Ach',
    husband : true

}

const crush2 : CrushInterface<string> = {
    name : 'Bella bella',
    husband : 'Tanbir'
}

interface Husbandinterface  {
    name : string,
    salary : number
}

const crush3 : CrushInterface<{name : string, salary : number}> = {
    name : 'Lina',
    husband : {
        salary : 34343,
        name : 'Lorem'
    }

}



const cursh4 : CrushInterface<object,object> = {
    name : 'Tanbir',
    husband : {
        name : 'Tanbir'
    },
    wife : {
        name : 'Fatema'
    }
}

// but ata best practise na

interface personinfo {
    name : string,
    age : number
}

const crush5 : CrushInterface<personinfo,personinfo>  = {
    name : 'Tanbir',
    husband : {
        name : "karim",
        age : 34
    }

}