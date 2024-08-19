

class Counter {
    static counter : number=0;


    // jehetu counter static property atake avabe access korte hbe, akhon jehetu ata staic jog biyog e ak man e change
    // hbe
    

    static increment():number{
        return Counter.counter = Counter.counter + 1;
         
    }

    static decrement():number{
        return Counter.counter= Counter.counter - 1;
         
    }
}

const tryOne = new Counter()
const tryTwo = new Counter()

console.log(Counter.increment())
console.log(Counter.increment())