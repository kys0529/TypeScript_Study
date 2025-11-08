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

function infiniteLoop(): never { // 함수가 정상적으로 끝나지 않을 때 사용
    while (true) {
        console.log("Continue...");
    }
}

//  📌 유니온 타입과 인터섹션 타입
// 1. 유니온 타입 (또는)
type ID = string | number;

let userID: ID = "abc-123";
userID = 529;

type Direction = "up" | "down" | "right" | "left";
function move(direction: Direction) {
    console.log(`${direction} 방향으로 이동`);
}

move("up");

// 2. 인터섹션 타입 (그리고)
type Person = {
    name: string;
    age: number;
}

type Employee = {
    employId: string;
    department: string;
}

type Staff = Person & Employee

const staff: Staff = {
    name: "Ari",
    age: 24,
    employId: "0915",
    department: "QA Manager"
}

// 📌 객체 리터럴 (즉, 클래스를 통한 객체 생성이 아닌, 중괄호를 사용해 직접 정의하는 객체 표현 방식)
let user: {name: string, age: number, skill?: string, readonly birthday: number} = {
    name: "Ari",
    age: 24,
    birthday: 529
};

function printUser(user: {name: string, age: number, skill?: string, readonly birthday: number}) {
    console.log(`${user.name}, ${user.age}`);
}

printUser(user);

// 📌 인터페이스
interface UserInterface {
    name: string;
    age: number;
    skill?: string;
    readonly birthday: number
}

let user2: UserInterface = {
    name: "Ari2",
    age: 24,
    birthday: 529
}

interface ProductInterface {
    name: string;
    tag: number;
    price: number;

    printPrice(): void;
}

let product: ProductInterface = {
    name: "다이어트 도시락",
    tag: 12345,
    price: 5000,

    printPrice(): void {
        console.log(`해당 제품의 가격은 ${this.price}입니다.`);
    }
}

// 📌 타입 별칭
type UserType = {
    name: string;
    age: number;
    skill?: string;
    readonly birthday: number
}

let user3: UserType = {
    name: "Ari3",
    age: 24,
    birthday: 529
}

type ProductType = {
    name: string;
    tag: number;
    price: number;

    printPrice(): void;
}

let product2: ProductType = {
    name: "다이어트 도시락",
    tag: 12345,
    price: 5000,

    printPrice(): void {
        console.log(`해당 제품의 가격은 ${this.price}입니다.`);
    }
}

// 📌 인덱스 시그니처
interface stringDictionary {
    [key: string]: string
}

let myDictionary: stringDictionary = {
    apple: "사과",
    banana: "바나나",
    tomato: "토마토"
}

interface numberArray {
    [key: number]: string
}

let fruit: numberArray = ["사과", "바나나", "토마토"];
console.log(fruit[0])

// 📌 함수 선언식
console.log(`2 + 3 = ${addFunc(1, 2)}`); // 호이스팅 O

function addFunc(a: number, b: number): number {
    return a + b;
}

// 📌 함수 표현식
// let subtractResult = subtractFunc(5, 3); // 호이스팅 X

let subtractFunc = function(a: number, b: number): number {
    if (a > b) {
        return a - b;
    }
    else {
        return b - a;
    }
}

console.log(`5 - 3 = ${subtractFunc(5, 3)}`);

// 📌 화살표 함수
let multiplyFunc = (a: number, b: number): number => a * b

console.log(`2 * 3 = ${multiplyFunc(2, 3)}`);

// 📌 콜백 함수
function calculate(a: number, b: number, callback: (result: number) => void) {
    let sum = a + b;

    setTimeout(() => {
        callback(sum);
    }, 1000)
}

calculate(2, 3, (result) => console.log(`두 수의 합은 ${result}입니다.`))

// 📌 제네릭 함수
function getFirst<T>(arr: T[]): T {
    console.log(`해당 배열의 첫 번째 값은 "${arr[0]}" 입니다.`);
    return arr[0];
} 

let stringArray: string[] = ["안녕하세요", "반갑습니다", "또 만나요"];
let numberArray: number[] = [1, 2, 3];
getFirst(stringArray);
getFirst(numberArray);

// 📌 this 바인딩
let person1: {name: string, hobbies: string[], printName(): void} = {
    name: "강수",
    hobbies: ["game", "exercise"],

    printName() {
        this.hobbies.forEach(function(hobby) {
            console.log(this.name + "의 취미는 " + hobby); // 각자의 this를 가짐
        })
    }
}

person1.printName()

let person2: {name: string, hobbies: string[], printName(): void} = {
    name: "강수",
    hobbies: ["game", "exercise"],

    printName() {
        this.hobbies.forEach((hobby) => {
            console.log(this.name + "의 취미는 " + hobby); // 부모의 this 사용
        })
    }
}

person2.printName()

// 📌 클래스
class PersonClass {
    public name: string;
    public age: number;
    private address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    get getAddress(): string {
        return this.address;
    }

    introduce(): void {
        console.log(`안녕하세요. 제 이름은 ${this.name}이고, 나이는 ${this.age}살 입니다.`)
    }
}

let person3 = new PersonClass('Ari', 24, '서울특별시');
person3.introduce();

// 📌 클래스 정적 멤버
class StaticClass {
    static PI: number = 3.14;

    static printPI(): void {
        console.log(`PI의 값은 ${this.PI}입니다.`)
    }
}

StaticClass.printPI();

// 📌 클래스 상속
class Animal {
    constructor(
        public name: string,
        public age: number
    ) {}

    makeSound(): void {
        console.log("동물 소리");
    }
}

class Dog extends Animal {
    constructor(
        name: string,
        age: number,
        public breed: string
    ) {
        super(name, age);
    }
}