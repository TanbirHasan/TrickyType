

function getFirstElement<T>(arr: T[]):T{
  return arr[0];
}

const firstElementOfStringArray = getFirstElement(["apple", "banana", "orange"]);
console.log(firstElementOfStringArray); 

type genericArray<T> = Array<T>

const cars = (arrType:genericArray<string>):string[] | number[] => {
  console.log(arrType)

  return arrType
}


const rollNumber : genericArray<number> = [3,4,2]

const rollNumber2 : Array<string> = ['3','5']

const rollNumber3 :Array<boolean> = [true,false]

const userRollNumber : Array<{name:string,role:number}> = [{name : 'ana',role : 4}];

type genericTuple<X,Y> = [X,Y]

const relation: genericTuple<string,string> = ['relan','ana']

interface relationWithSalary {
    name : string,
    salary : number
} 

const relationWithSalary: genericTuple<relationWithSalary,string> = [{name : 'relan',salary : 3434},
'ana'
]