

type genericArray<T> = Array<T>


interface crush<T> {
    name : string,
    car : T,

}

interface crushInterface<T,U> {
    name : string,
    car : T,
    home : U
}

const crush4 : crushInterface<object,object> = {
    name : 'bana',
    car : {
        name : 'bwm'
    },
    home : {
        name : 'home'
    }
}

const crush10 : crush<boolean> = {
    name : 'ana',
    car : false

}

const rollNumber : genericArray<number> = [3,4,2]

const rollNumber2 : Array<string> = ['3','5']


const rollNumber3 :Array<boolean> = [true,false]

const userRollNumber : Array<{name:string,role:number}> = [{name : 'ana',role : 4}]




type genericTuple<X,Y> = [X,Y]

const relation: genericTuple<string,string> = ['relan','ana']

interface relationWithSalary {
    name : string,
    salary : number
} 

const relationWithSalary: genericTuple<relationWithSalary,string> = [{name : 'relan',salary : 3434},
'ana'
]