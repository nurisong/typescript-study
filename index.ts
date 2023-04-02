let 이름: string = 'kim';
// 변수에 타입 지정할 수 있음
// 이 변수에는 string만 들어올 수 있음

// array 타입 지정
let arr :string[] = ['kim', 'park'];
// array로 지정 시, 안에 구성 타입도 작성해야 함
// 이 변수에는 string이 담긴 array만 들어올 수 있음

// object 타입 지정
let object :{ name : string } = { name : 'kim '}
let object2 :{ name? : string } = { name : 'kim '}
// name 속성은 옵션임

// 다양한 타입이 들어올 수 있게 하려면 Union type
let 이름2 :string[] | number = 123;

// 타입을 변수에 담아쓸 수 있음 Type alias
type Name = string | number; // 대문자로 작성
let 이름3 :Name = 123;

function 함수(x :number) :number {
    return x * 2
    // 이 함수는 파라미터로 number, return 값으로 number만 가능
}

// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean]; // 무조건 첫째는 number, 둘쨰는 boolean
let john :Member = [123, true];

// object에 타입지정해야할 속성이 너무 많으면
type Member2 = {
    // name : string
    [key :string] : String // 글자로 된 모든 obeject 속성의 타입은 string
}
let john2 :Member2 = { name : 'kim'}; 

class User {
    name :string;
    constructor(name :string) {
        this.name = name;
    }
}

// 타입지정은 자동으로 됨 -> 타입 지정 문법 생략 가능

// 예제
let 이름4 :string = '이름';
let 나이 :number = 28;
let 출생지역 :string = '인천';

let song :{ title : string, artist : string } = { title : '제목', artist : '가수'};

let project :{ 
    member : string[], 
    day : number, 
    started : boolean };