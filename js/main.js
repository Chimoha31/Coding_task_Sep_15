"use strict";
// 1. Create an array - students, insert four items, which should be objects and have three properties: name, score1, score2,
//     with the following values:
//     a. John, 47, 46
//     b. Bob, 23, 24
//     c. Nick, 40, 35
//     d. Alex, 44, 45
// 2. Suppose that, students have chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant
//     to the following passing limits 91, 81, 71, 61, 51. According to that, create two arrays for passing limits and for degrees
// 3. Create function which will calculate total score (score1 + score2) for each student.
// 4. Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student
//     has passed an exam and what kind of degree he has got.
// 5. Display the final result in console.

// Assignment 1
const studentsArr = [
  { name: "John", score1: 47, score2: 46 },
  { name: "Bob", score1: 23, score2: 24 },
  { name: "Nick", score1: 40, score2: 35 },
  { name: "Alex", score1: 44, score2: 45 },
];
// Assignment 2
// 2. Suppose that, students have chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant
//     to the following passing limits 91, 81, 71, 61, 51. According to that, create two arrays for passing limits and for degrees
const passScore = [91, 81, 71, 61, 51];
const degree = ["A", "B", "C", "D", "E"];

// Assignment 3
const calcTotalScore = function (score1, score2) {
 return score1 + score2;
}

for (let i = 0; i < studentsArr.length; i++) {
  const totalScore = calcTotalScore(studentsArr[i].score1, studentsArr[i].score2);
  studentsArr[i].total = totalScore;
// Pass exam
  if(totalScore >= 51) {
    console.log(studentsArr[i].name + ' pass the exam');
  }

for (let x = 0; x < passScore.length; x++) {
  if(totalScore >= passScore[x]) {
    console.log('He has ' + totalScore + ' points, and he got a degree' + degree[x]);
    break;
  }
} 
// const studentsScore = studentsArr.map(score => {
//   let eachScore = {};
//   eachScore[score.name] = score.total;
//   return eachScore;
// });
// console.log(...studentsScore);
}

// Different way
// const studentScore1 = [...new Set(studentsArr.map(student => student.score1))]
// const studentScore2 = [...new Set(studentsArr.map(student => student.score2))]
// console.log(calcTotalScore(studentScore1[0], studentScore2[0]));
// console.log(calcTotalScore(studentScore1[1], studentScore2[1]));
// console.log(calcTotalScore(studentScore1[2], studentScore2[2]));
// console.log(calcTotalScore(studentScore1[3], studentScore2[3]));

// Assignment 4 & 5
// 4. Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student has passed an exam and what kind of degree he has got.
// 5. Display the final result in console.


// 誰がどのスコアをとるか
// まず、const passScore = [91, 81, 71, 61, 51];と4人の合計得点を比較する。
//