// Boolean (불린)
const valueA = true // 긍정
const valueB = false // 긍정


// null VS undefined
let age = null;
let name;

console.log(age);
console.log(name);

setTimeout(function(){
  age=28
  console.log(age);
},1000);


// 명시적인 null 암시적인 undefined
const user = {
  name: 'betty',
  age: 21,
  email: null
}

console.log(user.name)
console.log(user.age)
console.log(user.email)
console.log(user.abc)