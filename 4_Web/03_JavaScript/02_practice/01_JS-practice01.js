console.log("================== 실습1 ====================")

const mongryong = {
    name: "이몽룡",
    age: 18,
    girlfriend: {
        name: "성춘향",
        age: 16
    },
    isMarried: true,
    like: ['Dog', 'Cat']
};

console.log(mongryong);

console.log("================== 실습2 ====================")

let mathScore = "77";
let engScore = "88";

let avgScore = ((Number(mathScore) + Number(engScore))) / 2;

console.log(avgScore, typeof avgScore);

console.log("================== 실습3 ====================")

let math_Score = parseFloat(prompt("수학점수를 입력해주세요."));
let eng_Score = parseFloat(prompt("영어점수를 입력해주세요."));

let Scores = [math_Score, eng_Score];

let avg_Score = (math_Score + eng_Score) / Scores.length;

console.log("평균 점수:", avg_Score, "점");
