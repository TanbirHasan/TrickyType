

const age:number = 5;

if(age > 18){
    console.log("Yes")
}
else{
    console.log("No")
}

const isAdult = age >= 18 ? "Yes" : "No";

// Nullish coalescing operator

// value null ba undefined holei then nullish operator kaj korbe

const isAuthenticated = null
const userName = isAuthenticated ?? 'Guest  '

type manush = {
    name : string,
    age : number,
    address : {
        city : "no city",
        road : "no road",
        home? : ""
    }
}

const prothomjon : manush = {
    name : 'Karim',
    age : 34,
    address : {
        city : "no city",
        road : "no road"
    }

}