// async

function delay(ms) {
    return new Promise(resolve => {
        // resolve를 호출하는 것만 있으면
        // resolve를 콜백 함수 자체로 전달해도 된다.
        setTimeout(resolve, ms);
    });
}

function hello() {
    return 'hello';
}

// async 키워드를 붙인 함수의 return 값은
// 비동기 작업 객체 Promise의 resolve의 결과 값이 된다.
async function helloAsync() {
    // return delay(3000).then(() => {
    //     return 'hello Async';
    // });
    // await 키워드가 붙은 함수의 호출은 
    // 해당 함수가 끝나기 전까지 뒤에 있는 코드를 수행하지 않는다.
    await delay(3000);
    return 'hello Async';
}

async function main() {
    const res = await helloAsync();
    console.log(res);
}

main();

// helloAsync().then(res => console.log(res));
