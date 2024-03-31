

// mocking
const makePromise = ():Promise<string> => {
   return new Promise<string>((resolve,reject) => {
        const data : string = 'Data is fetcched'
        if(data){
            resolve(data)
        }
        else {
            reject('Failed to fetch data')
        }
    })
}

const resultPromise = async ():Promise<string> => {
    const data = await makePromise()

    return data
    
}
interface itodo  {
    userId : number,
    id : number,
    title : string,
    completed : boolean

}

const getTodo = async ():Promise<itodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await response.json()
}

const gettodo = async  ():Promise<void> => {
    const result = await getTodo()
    console.log(result)

}

gettodo()
