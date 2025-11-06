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