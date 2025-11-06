// 📌 변수 선언 (var, let, const)
console.log(varVal); // undefined 
// console.log(letVal); 
// console.log(constVal); 

var varVal: number = 1;
let letVal: string = "안녕하세요";
const constVal: boolean = true;

var varVal: number = 1; // 재선언 가능
varVal = 2; // 재할당 가능

// let letVal: string = "안녕하세요"; // 재선언 불가능
letVal = "반갑습니다" // 재할당 가능

// const constVal: boolean = true; // 재선언 불가능
// constVal = false; // 재할당 불가능

// 📌 변수 스코프 (함수 스코프, 블록 스코프)
function varScope(): void {
    if (true) {
        var functionVar: string = "함수 스코프";
    }
    console.log(functionVar); // var는 블록 무시, 함수 내 어디서든 접근 가능
}
// console.log(functionVar); // 함수 밖에서는 접근 불가

function letScope(): void {
    if (true) {
        let blockLet: string = "블록 스코프";
        console.log(blockLet); // var는 블록 내에서만 접근 가능
    }
    // console.log(blockLet);  // 블록 밖에서는 접근 불가
}
// console.log(blockLet);  // 블록 밖에서는 접근 불가

function constScope(): void {
    if (true) {
        const blockConst: string = "블록 스코프";
        console.log(blockConst); // var는 블록 내에서만 접근 가능
    }
    // console.log(blockConst);  // 블록 밖에서는 접근 불가
}

// 📌 기본 타입
// 1. 원시 타입 (Primitive Types)
let age: number = 24;
let message: string = "Hello. My name is Ari.";
let isStudent: boolean = false;
let empty: null = null;
let notAssigned: undefined = undefined;

// 2. 객체 타입 (Object Types)
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Ari", "Sally"];
let person: [string, number] = ["Ari", 24];
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor = Color.Red;

// 3. 특수 타입
let anything: any = 1;
anything = "Hello";
anything = true;

let userInput: unknown = "Hello"; 
userInput = 529;

if (typeof(userInput) === "string") {
    console.log(userInput.toUpperCase()); // unknown은 any와 달리 사용 전에 타입 체크 필요
}

function printMessage(message: string): void { // return이 없거나 return; 만 있는 함수에서 사용
    console.log(message);
}
printMessage("안녕하세요? 반갑습니다. 제 이름은 Ari입니다.");

function infiniteLoop(): never {
    while (true) {
        console.log("Continue...");
    }
}