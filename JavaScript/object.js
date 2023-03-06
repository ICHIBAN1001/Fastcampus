// 생성자 함수 방식
const user = new Object()
user.name = 'Ichiban'
user.age = 28

console.log(user)


// function 함수 방식
function User (){
  this.name = 'betty'
  this.age = 21
}
const user = new User();
console.log(user)


// 객체 리터럴 
const user = {
  name : 'betty',
  age : 21
}

console.log(user.name);
console.log(user['name']);




const userA = {
  name : 'betty',
  age : 21
}

const userB = {
  name : 'ichiban',
  age : 28 , 
  girlfriend: userA
}

console.log(userB.girlfriend.name)
console.log(userB['girlfriend'][userB])

const users = [userA, userB]
console.log(users[0]['name'])