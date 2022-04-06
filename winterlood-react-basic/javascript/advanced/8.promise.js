function isPositive(number, resolve, reject) {
    setTimeout(() => {
        if (typeof number === 'number') {
            // 성공 => resolve
            resolve(number >= 0 ? '양수' : '음수');
        } else {
            // 실패 ->  reject
            reject('주어진 값이 숫자형 값이 아닙니다');
        }
    }, 2000);
}

// 어떤 함수가 Promise로 반환한다는 것은
// 비동기 작업을 하고, 작업의 결과를 Promise 객체로 반환받아서 사용할 수 있는 함수다.
function isPositiveP(number) {
    // 실행자
    const executor = (resolve, reject) => {
        setTimeout(() => {
            if (typeof number === 'number') {
                // 성공 => resolve
                console.log(number);
                resolve(number >= 0 ? '양수' : '음수');
            } else {
                // 실패 ->  reject
                reject('주어진 값이 숫자형 값이 아닙니다');
            }
        }, 2000);
    };
    const asyncTask = new Promise(executor);
    return asyncTask;
}

const res = isPositiveP([]);
res.then(res => {
    console.log('작업 성공 : ', res);
}).catch(err => {
    console.log('작업 실패 : ', err);
});

// isPositive(
//     [],
//     res => {
//         console.log('성공 : ', res);
//     },
//     err => {
//         console.log('실패 : ', err);
//     },
// );

console.clear();
// 콜백 지옥 탈출하기
function taskB(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 3000);
    });
}

function taskC(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);
    });
}

function taskD(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * -1;
            resolve(res);
        }, 2000);
    });
}

// taskB(5, 1).then(b_res => {
//     console.log('B RESULT : ', b_res);
//     taskC(b_res).then(c_res => {
//         console.log('C RESULT : ', c_res);
//         taskD(c_res).then(d_res => {
//             console.log('D RESULT : ', d_res);
//         });
//     });
// });

// then 체이닝
const bPromiseResult = taskB(5, 1).then(b_res => {
    console.log('B RESULT : ', b_res);
    return taskC(b_res);
});
console.log('a');
bPromiseResult
    .then(c_res => {
        console.log('C RESULT : ', c_res);
        return taskD(c_res);
    })
    .then(d_res => {
        console.log('D RESULT : ', d_res);
    });

// taskB(4, 5, b_res => {
//     console.log('B RESULT : ', b_res);
//     taskC(b_res, c_res => {
//         console.log('C RESULT : ', c_res);
//         taskD(c_res, d_res => console.log('D_RESULT : ', d_res));
//     });
// });
