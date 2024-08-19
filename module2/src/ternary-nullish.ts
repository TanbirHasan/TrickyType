






let age:number = 4;

if (age => 34) {
  console.log("yes");
} else {
  console.log("No");
}


const isAdult = age > 18 ? 'yes' : 'no'


// nullish coalescing operator

// null or undefined

const isAuth = null

const userName = isAuth ?? 'Guest'
console.log(userName)