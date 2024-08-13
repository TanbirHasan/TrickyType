


const makePromise = ():Promise<string> => {
   return new Promise<string>((resolve,reject) =>{
        const data : string = 'data is fetched'
        if(data){
            resolve(data)
        }
        else{
            reject('failed ot fetch data')
        }
    })
}


const getPromiseData = async () => {
    const reuslt = await makePromise()
    return reuslt
}

///////////////////// fetching data


type todosType = {
    userId : number,
    id : number,
    title : string,
    completed : boolean
}



const getTodo = async(): Promise<todosType> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    return data
}


getTodo()