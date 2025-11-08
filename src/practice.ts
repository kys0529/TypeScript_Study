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

// 📌 비동기
let users: string[] = ["강수", "Ari", "강", "수"]

// 1. 콜백 함수
//  ㄴ 가장 기본적인 비동기 처리 방법
//  ㄴ 작업이 끝나면 "이 함수 실행해줘!"하고 미리 넘겨주는 것
function fetchUserCallback(userID: number, callback: (user: string) => void) {
    let user = users[userID]; // 사용자 정보를 가져오는 것

    setTimeout(() => { // 사용자 정보를 가져온 뒤, 3초 뒤 콜백 함수 실행하는 것
        callback(user);
    }, 3000)
}

// 나는 userID가 0번인 사람을 찾고싶어, 찾았다면 이 함수를 실행해줘.
// 즉, 나는 지금 userID가 0번인 user가 누군지 몰라. 그래서 찾아줘. 찾고 나면 해당 값으로 이 함수를 실행할 거야.
fetchUserCallback(0, (user) => console.log(`콜백 결과 - 사용자 ID: 0, 사용자 이름: ${user}`));

// 2. Promise
//  ㄴ 콜백 지옥을 해결하기 위해 등장
//  ㄴ "나중에 결과를 줄게!"라는 약속 객체
//  ㄴ 성공하면 .then()으로, 실패하면 .catch()로 처리
function fetchUserPromise(userID: number): Promise<string> {
    let user = users[userID]; // 사용자 정보를 가져오는 것

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user) {
                resolve(user)
            } else {
                reject("잘못된 사용자 ID")
            }
        }, 3000)
    })
}

fetchUserPromise(1)
    .then((user) => {
        console.log(`Promise 결과 - 사용자 ID: 1, 사용자 이름: ${user}`)
    })
    .catch((error) => {
        console.log(`에러 발생: ${error}`)
    });

// 3. async, await
//  ㄴ Promise를 더 읽기 쉽게 만든 문법
//  ㄴ 비동기 코드를 동기 코드처럼 작성 가능
//  ㄴ async: 함수 앞에 붙여서, "이 함수는 비동기야" 라고 선언
//  ㄴ await: Promise가 완료될 때까지 기다림
async function fetchUser() {
    try {
        let user0 = await fetchUserPromise(0);
        console.log(`사용자 ID: 0, 사용자 이름: ${user0}`)

        let user1 = await fetchUserPromise(1);
        console.log(`사용자 ID: 1, 사용자 이름: ${user1}`)

        // 여러 Promise를 동시에 실행
        let [user2, user3] = await Promise.all([fetchUserPromise(2), fetchUserPromise(3)]);
        console.log(`동시 실행 결과\n사용자 ID: 2, 사용자 이름: ${user2}\n사용자 ID: 3, 사용자 이름: ${user3}`)
    }
    catch (error) {
        console.log(`에러 발생: ${error}`)
    }
}

fetchUser();