// /* 1. 자료형 확인 */

// function getNumber () {
//   return 123
// }

// // const getNumber = function () {
// //   return 123
// // }

// console.log(typeof getNumber)
// console.log(typeof getNumber())


const valueA = function () {
  console.log('A');
}

const valueB = function (argC) {
  console.log(argC);
}

// console.log(valueB(123)) 
valueB(123)

valueB(valueA)