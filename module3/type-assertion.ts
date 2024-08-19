let emni: any;

emni = "next level web development";

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The Converted result is : ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

// param e union type use korle ts  jane na function call e ki type param return hbe ty ati as number bole explicityly bole deta hoi

const resultToNumber = kgToGram(1000) as number;
const resultToString = <string>kgToGram("1000");

type CustomError = {
  message: string;
};

try {
  console.log("message");
} catch (err) {
  console.log((err as CustomError).message);
}
