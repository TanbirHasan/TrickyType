


type NoobDeveloper = {
    name : String
}

type JuniorDevelopers = {
    name : String,
    expertise : String,
    experince : number
}

// union mane duity j property common ta nibe and common bade duitar moddhe ja property ase tao nibe but byrer ar kichu nibe na
// ami jdi expertise or experince or name knota bad di tarpor o error dekhabe na


const newDeveloper: NoobDeveloper | JuniorDevelopers={
    name : 'dsfds',
    expertise : 'sdfdsf',
    experince : 4
}

// intersection
// ata hsse NoobDeveloper e ja ase ta nibe + & dea notun property guli o niba

type Developers = NoobDeveloper & {
    expertise : String,
    experince : number
}


// & intersection and | union


// level mane order bujhano mane junior 0, mid 1
enum Level  {
    junior = 'junior',
    mid = 'mid',
    senior = 'senior'
}


type NextLevelDevelopers = JuniorDevelopers & {
    leadershipexperince  : number;
    level : Level;
}




const developers : NextLevelDevelopers = {
    name : 'dsd',
    experince : 4,
    expertise : 'dfd',
    leadershipexperince : 3,
    level : Level.junior

}