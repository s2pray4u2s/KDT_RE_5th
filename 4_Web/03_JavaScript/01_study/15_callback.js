// // ex. 편의점 >> 음료를 고르고 >> 산다
// function goMart() {
//     console.log("마트에 가서 어떤 음료를 살지 고민...");
// }

// function pickDrink() {
//     // 3초 고민 후에 결정
//     setTimeout(function () {
//         console.log("고민 끝!");
//         product = "zero_CocaCola";
//         price = 2000;
//     }, 3000);
// }

// function pay() {
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product;
// let price;

// goMart();
// pickDrink();
// pay();

// 1. 콜백 함수를 이용해 비동기 처리
function goMart() {
    console.log("마트에 가서 어떤 음료를 살지 고민...");
}

function pickDrink(callback) {
    // 3초 고민 후에 결정
    setTimeout(function () {
        console.log("고민 끝!");
        product = "zero_CocaCola";
        price = 2000;
        callback(); // 매개변수로 넘긴 콜백함수를 실행
    }, 3000);
}

function pay() {
    console.log(`상품명: ${product}, 가격: ${price}`);
}

let product;
let price;

goMart();
pickDrink(pay);
