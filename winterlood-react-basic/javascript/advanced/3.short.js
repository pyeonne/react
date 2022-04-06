const getName = person => {
    const name = person && person.name;
    return name || '객체가 아닙니다';
};

let person = null;
const name = getName(person);
console.log(name);
