




const searchNames = (value:string) => {
    if(value === null){
         console.log("There is nothing to search")
    }
    else {
        console.log("Searching")
    }
}


searchNames('30')


// unknown 
// ata hsse ami compile time e data type janina but runtime e janbo tokhn vabe dea condition caliye data ta dea kaj korter hoi

const getmycarspeed = (speed:unknown) => {
if(typeof speed === 'number'){

}
else{

}


}

getmycarspeed(34)
getmycarspeed('20 km oer hour')