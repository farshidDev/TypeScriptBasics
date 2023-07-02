
//variable types : string, number, boolean, null, undefined

let myName: string = '';

// error
// myName = 5;

// types inference : "myId" is number without using annotation ":number"
// this works when we initialize the variable 
let myId = 5


// Arrays


// inference
let items = ['test']

let items2: string[] = [];

let items3: string[] | number[] = [];

let items4 = [5, 'test'] // array of numbers and strings

