const arr = [
    { num: 1, color: 'red' },
    { num: 2, color: 'black' },
    { num: 3, color: 'blue' },
    { num: 4, color: 'green' },
    { num: 5, color: 'blue' },
];

const arr2 = [
    { num: 6, color: 'green' },
    { num: 7, color: 'blue' },
];

let number = 3;

// findIndex()는 가장 먼저 조건에 만족하는 요소의 인덱스를 반환한다.
const idx = arr.findIndex(elm => elm.color === 'blue');
console.log(arr[idx]);

// find()는 가장 먼저 조건에 만족하는 요소를 반환한다.
const element = arr.find(elm => elm.color === 'blue');
console.log(element);

// filter()는 전달한 콜백 함수가 true로 반환하는 요소들을 모두 반환한다.
console.log(arr.filter(elm => elm.color === 'blue'));

console.log(arr.slice(0, 2));

console.log(arr.concat(arr2));

// sort()는 원본 배열의 순서를 정렬한다.
let chars = ['나', '다', '가'];
chars.sort();
console.log(chars);

let numbers = [0, 1, 3, 2, 7, 2, 10];

// 오름차순
const compare = (a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
};

// 내림차순
// const compare = (a, b) => {
//     if (a > b) {
//         return -1;
//     }
//     if (a < b) {
//         return 1;
//     }
//     return 0;
// };

numbers.sort(compare);
console.log(numbers);

const arr3 = ['편네', '님', '안녕하세요', '또오셨군요'];
console.log(arr3.join(' '));
