// 동기 처리 방식
function taskA() {
    console.log('A 작업 끝');
}

taskA();
console.log('코드 끝');

// 비동기 처리 방식
function taskB(a, b, cb) {
    setTimeout(() => {
        const res = a + b;
        cb(res);
    }, 3000);
}

function taskC(a, cb) {
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}

function taskD(a, cb) {
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 2000);
}

// taskB(3, 4, res => {
//     console.log('B TASK RESULT :', res);
// });

// taskC(7, res => {
//     console.log('C TASK RESULT :', res);
// });

// taskD(7, res => {
//     console.log('D TASK RESULT :', res);
// });

// 콜백 지옥
taskB(4, 5, b_res => {
    console.log('B RESULT : ', b_res);
    taskC(b_res, c_res => {
        console.log('C RESULT : ', c_res);
        taskD(c_res, d_res => console.log('D_RESULT : ', d_res));
    });
});

console.log('코드 끝');
