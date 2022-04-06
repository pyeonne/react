let arr = [1, 25];

const arrayStatus = arr.length === 0 ? '빈 배열' : '안 빈 배열';
console.log(arrayStatus);

let a = [];

const result = a ? true : false;
console.log(result);

//  TODO 학점 계산 프로그램
// 90점 이상 A+
// 50점 이상 B+
// 둘다 아니면 F

let score = 100;
// score >= 90
//     ? console.log('A+')
//     : score >= 50
//     ? console.log('B+')
//     : console.log('F');

// 삼항 연산자가 중첩되면 가독성이 떨어지므로
// 가급적 중첩 if문을 사용하는 것이 좋다.
if (score >= 90) {
    console.log('A+');
} else if (score > -50) {
    console.log('B+');
} else {
    console.log('F');
}
