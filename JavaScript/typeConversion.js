console.log(typeof 'Hetty'=== 'string');
console.log(typeof 123 === 'number');
console.log(typeof true === 'boolean');
console.log(typeof undefined=== 'undefined');

console.log(typeof null === 'object');  // typeof 로 구분이 안된다
console.log(typeof [] === 'object');    // typeof 로 구분이 안된다
console.log(typeof {} === 'object');    // typeof 로 구분이 안된다
console.log(typeof function () {} === 'function');

// console.log(null.constructor) => null 값은 constructor로 알 수 없다
console.log([].constructor === Array);
console.log({}.constructor === Object);


// 데이터 타입 구분
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8,-1)
}

console.log(checkType('Betty'))
console.log(checkType(123))
console.log(checkType(false))
console.log(checkType(undefined))
console.log(checkType(null))
console.log(checkType([]))
console.log(checkType({}))
console.log(checkType(function () {}))





console.log(Object .prototype.toString.call(null).slice(8,-1));