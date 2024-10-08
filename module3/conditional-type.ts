type a1 = string;

type a2 = a1 extends string ? string : null;

// nested conditional types

type a3 = undefined;
type a4 = number;

type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

  type Manush = {
    car1 : string,
    car2 : string
  }


  // check korbe ai manush er car1 ase kina 

  type A = keyof Manush

  type CheckProperty<T,K> = K extends keyof Manush ? true : false;

  type CheckOne = CheckProperty<Manush,'car1'>