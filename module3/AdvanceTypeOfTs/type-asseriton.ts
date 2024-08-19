

// ts k extra vabe bole deya j aita ki type hbe
let emni : any;

emni = 'Next Level Web Development';
(emni as string).charAt





//////////////////


function kgToGram(param : string | number) : string | number | undefined{
    if(typeof param === 'string'){
        const value = parseFloat(param)*1000
        return `The converted result is : ${value}`
    }
    if(typeof param === 'number'){
        const value = param*1000
        return value
    }

  

}

const resultToNumber = kgToGram(456) as number
const resultToString = kgToGram('1000') as string

// const resultToString = <string>kgToGram('1000')


///////////////////

type CustomError = {
    message : string
}

try{}
catch(err){
   console.log((err as CustomError))
}