// 객체 안에 있는 함수는 메서드라고 부른다.
// 객체 안에 함수 외에는 멤버라고 부른다.
const person = {
    name: 'pyeonne', // 프로퍼티 (객체 프로퍼티)
    age: 29,
    say: function () {
        console.log(`안녕, 나는 ${this.name}`);
    }, // 메서드 -> 방법
}; // 객체 리터럴 방식

console.log(getPropertyValue('name'));

function getPropertyValue(key) {
    return person[key];
}

person.location = '한국';
person['gender'] = '여성';

person.name = '편네';
person['gender'] = '여자';

// delete로 삭제한 속성은 메모리를 비우지 않는다.
// delete person.age;
delete person['gender'];

// 속성값을 null로 할당하면 기존에 가지고 있는 메모리를 날릴 수 있어
// 이러한 방식을 더 선호한다.
person.name = null;

console.log(person);

person.say();
person['say']();

// in 연산자를 활용하면 객체 안에 해당되는 프로퍼티가 있는지 확인할 수 있다.
console.log(`name : ${'name' in person}`);
console.log(`name : ${'gender' in person}`);
