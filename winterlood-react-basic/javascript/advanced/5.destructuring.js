// 배열의 선언 분리
// 배열의 비 구조화 할당
// let [one, two, three, four = 'four'] = ['one', 'two', 'three'];
// console.log(one, two, three, four);

// 비 구조화 할당을 사용하면 변수의 스왑을 쉽게 할 수 있다.
let a = 10;
let b = 20;
let tmp = 0;
tmp = a;
a = b;
b = tmp;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

// 객체의 key 값으로 비 구조화 할당이 이루어진다.
let object = { one: 'one', two: 'two', three: 'three', name: '정하나' };

// one = object.one;
// two = object.two;
// three = object.three;
// key 값의 변수명을 변경할 수도 있다.
let { one, two, three, name: myName, abc = 'four' } = object;

console.log(one, two, three, myName, abc);
