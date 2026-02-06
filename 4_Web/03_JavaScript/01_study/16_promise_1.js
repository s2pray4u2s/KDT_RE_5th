/*
promise
    - 비동기 함수를 동기 처리하기 위해 만든 객체
    - 미래에 실패 / 성공에 대한 결과 값을 "약속" 한다는 의미
    - 성공, 실패 분리해서 반환
        - 성공, 실패에 대한 결과는 then, catch 메서드로 이어받아서 처리 가능
    - >> 성공이든 실패든 무언가의 "최종 결과"
*/

// 1. promise를 생성하는 코드
function promise1(flag) {
    return new Promise(function (resolve, reject) {
        if (flag) {
            resolve(
                `현재 프로미스의 상태는 fulfilled(이행)! then 메서드로 연결! 이 때 flag 값은 ${flag}`
            );
        } else {
            reject(
                `현재 프로미스의 상태는 reject(거절)! catch 메서드로 연결! 이 떄 flag 값은 ${flag}`
            );
        }
    });
}

// 2. promise 사용 코드
promise1(5 > 3)
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });


// 3. 프로미스 예제
function goMart() {
    console.log("마트에 가서 어떤 음료를 살지 고민...");
}

function pickDrink() {
    return new Promise((resolve, reject) => {
        // 3초 고민 후에 결정
        setTimeout(function () {
        console.log("고민 끝!");
        product = "zero_CocaCola";
        price = 2000;
        resolve();
    }, 3000);
    });
}

function pay() {
    console.log(`상품명: ${product}, 가격: ${price}`);
}

let product;
let price;

goMart();
pickDrink().then(pay);