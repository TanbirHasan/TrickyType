



const friends = ['Karim','Rahim','Sharif'];
const newFriends = ['Aly','kenly','shenly']

friends.push(...newFriends)

// rest parameter

// rest operator hsse spread er olta

const greetFriends = (...friends:string[]):void => {
   console.log(`Hi my friends `)
   friends.forEach(friend => console.log(`Every friend name is ${friend}`))
}

greetFriends('kashem','hashem','rashem','pashem','jashem')