// 📌 원시 타입
let num: number = 1;

// 📌 객체 타입
let numArray: number[] = [1, 2, 3, 4, 5];
let numArray2: Array<number> = [1, 2, 3, 4, 5];

// 📌 객체 타입: 리터럴 객체
// let user1: { name: string, age: number, email: string } = {
//     name: 'Ari',
//     age: 24,
//     email: 'email@email.com'
// };

// let user2: { name: string, age: number, email: string } = {
//     name: 'Song',
//     age: 33,
//     email: 'drowsy.work@gmail.com'
// };

// let user3: { name: string, age: number, email: string } = {
//     name: 'Jay',
//     age: 30,
//     email: 'Janguri@gmail.com'
// };

// let user4: { name: string, age: number, email: string } = {
//     name: 'Da',
//     age: 18,
//     email: 'email@email.com'
// };

// 📌 인터페이스
interface User {
    name: string;
    age: number;
    email: string;
}

// let user1: User = {
//     name: 'Ari',
//     age: 24,
//     email: 'email@email.com'
// }

// let user2: User = {
//     name: "Song",
//     age: 33,
//     email: "drowsy.work@gmail.com"
// }

// let user3: User = {
//     name: "jay",
//     age: 30,
//     email: "janguri@gmail.com"
// }

// let user4: User = {
//     name: 'Da',
//     age: 18,
//     email: 'email@email.com'
// }

// 📌 타입 별칭
type UserType = {
    readonly key: number,
    name: string,
    age: number,
    email?: string
}

// let user1: UserType = {
//     key: 1,
//     name: 'Ari',
//     age: 24
// }

// let user2: UserType = {
//     key: 2,
//     name: "Song",
//     age: 33,
//     email: "drowsy.work@gmail"
// }

// let user3: UserType = {
//     key: 3,
//     name: "jay",
//     age: 30
// }

// let use4: UserType = {
//     key: 4,
//     name: "da",
//     age: 18
// }

class UserClass {
    name: string;
    age: number;
    email: string;

    // 생성자 만들어주기
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

// new: UserClass에서 새로운 객체를 만들겠다
let User1 = new UserClass('Ari', 24, 'email@email.com');
let User2 = new UserClass('Song', 33, 'drowsy.work@gmail.com');
let User3 = new UserClass('Jay', 30, "jan@gmail.com");
let User4 = new UserClass('da', 18, 'test@email.com');

// console.log(User3.age);
// console.log(`안녕하세요 제 이름은 ${User1.name}이고요, 나이는 ${User1.age}입니다.`);

let UserArray: UserClass[] = [User1, User2, User3, User4];
for (let i: number = 0; i < UserArray.length; i++) {
    console.log(`안녕하세요 제 이름은 ${UserArray[i].name}이고요, 나이는 ${UserArray[i].age}살 입니다.`);
}

interface ProfileInterface {
    name: string,
    age: number,
    skill: string,

    Introduce(): void
}

/** 이걸 쓰던지 */
class AriProfile implements ProfileInterface {
    name: string;
    age: number;
    skill: string;

    constructor(name: string, age: number, skill: string) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }

    Introduce(): void {
        console.log("안녕하세요!");
    }
}

/** 아래걸 쓰던지 */
// class AriProfile implements ProfileInterface {
//     constructor(
//         public name: string,
//         public age: number,
//         public skill: string
//     ) {// 생성자 중괄호 내용 포함 내용}
//        // 속성 초기화 (가장 일반적인 용도)
//           this.name = "이름"  
//        // 유효성 검사 및 설정)        
//      if (age < 0) {
//     throw new Error("나이는 음수가 될 수 없습니다."); // 👈 유효성 검사
//   }
//   this.age = age;
//     Introduce(): void {
//         console.log("안녕하세요!");
//     }
// }