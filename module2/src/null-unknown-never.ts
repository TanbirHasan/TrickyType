

const searchName = (value:string | null) => {
    if(value === null){
        console.log('There is nothing')
    }
    else{
        console.log('Searching..')
    }
}

searchName(null)


// unknown 

const getSpeed = (speed : unknown) => {
    if(typeof speed === 'number'){
        const convertedSpeed = (speed * 478) / 3600
    }
    if(typeof speed === "string"){
        const [value,unit] = speed.split(' ')
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;

        console.log(`My speed is ${convertedSpeed}`)
    }
    return speed;
}

getSpeed(20);
getSpeed('30 per hour')


// never


const throwError = (message:string):never => {
    throw new Error(message)
}


throwError('Error hoyeche')