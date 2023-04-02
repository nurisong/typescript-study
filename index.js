var 이름 = 'kim';
// 변수에 타입 지정할 수 있음
// 이 변수에는 string만 들어올 수 있음
// array 타입 지정
var arr = ['kim', 'park'];
// array로 지정 시, 안에 구성 타입도 작성해야 함
// 이 변수에는 string이 담긴 array만 들어올 수 있음
// object 타입 지정
var object = { name: 'kim ' };
var object2 = { name: 'kim ' };
// name 속성은 옵션임
// 다양한 타입이 들어올 수 있게 하려면 Union type
var 이름2 = 123;
var 이름3 = 123;
function 함수(x) {
    return x * 2;
    // 이 함수는 파라미터로 number, return 값으로 number만 가능
}
var john = [123, true];
var john2 = { name: 'kim' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
