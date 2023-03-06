const number = -123.1234
const pi = .14 // 소수점 앞 정수가 0이면 생략 가능

console.log(typeof(number + undefined)) // NaN은 숫자가 아닌 숫자 
console.log(typeof pi)



// 부동 소수점 오류
const valueA = 0.1
const valueB = 0.2

console.log(Number(valueA+valueB).toFixed(1))

