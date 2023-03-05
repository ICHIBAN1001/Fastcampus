import _ from 'lodash'  // import 변수이름 from ‘패키지 이름’

console.log(_.upperCase('hello-world'));


// 타입스크립트 코드 (문법)
interface User {
  name : string
  age : number
}

const user : User = {
  name : 'ICHIBAN',
  age : 28
}

console.log(user)