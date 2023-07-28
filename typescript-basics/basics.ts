// Primitives: number, strings, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "elian"

let isInstructor: boolean;
isInstructor = true

// More complex types

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: {
    name: string;
    age: number
};

person = {
    name: "Max",
    age: 32
}

let people: {
    name: string;
    age: number
}[];

people = [{
    name: "Max",
    age: 32
}]

// Type inference

//Nese asenjojme direkt vlere ne nje variabel, TypeScript e di tipin e variablit
// Mund ta vendosim dhe let course: string por nuk eshte nevoja
let course = "React - The Complete Guide"
// course = 1234; => kjo sjell error


//Union Type

let space: string | number
space = 1234;


//Type Alias

type Person = {
    name: string;
    age: number;
}

let person_alias: Person
let people_alias: Person[]


// Functions & types

function add(a: number, b: number) {
    return a + b
}

function print_output(value: any) {
    console.log(value);
}


// Generics
// Kjo metode na mundeson dhe thote qe tipi i vlerave ne array dhe vlera qe po fusim
// duhet te jene te njejta. Po te shohesh ne rastin e pare ne fusin numra
// dhe metoda split('') nuk mund te aplikohet ne numra. Ne rastin e dyte
// ne fusim stringje dhe metoda split('') nuk sjell error
function insetAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray;
}


const NumberArray = [1, 2, 3];
const updatedNumberArray = insetAtBeginning(NumberArray, 2)
updatedNumberArray[0].split('')

const StringArray = ["1", "2", "3"];
const updatedStringArray = insetAtBeginning(StringArray, "2")
updatedStringArray[0].split('')


