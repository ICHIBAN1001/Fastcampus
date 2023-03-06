/* 둘 중에 선택해서 사용하면 된다  */
const string1 = "Hello" // 큰 따옴표
const string2 = 'Hello' // 작은  따옴표

/* 보간: 데이터를 문자 내부에 채워넣는 용도 */
/* 문자 데이터 내부에 $ 로 시작해서 { } 로 작성 , 중괄호 사이에 데이터 넣기  */
const string3 = `Hello ${string1} ?!` // `(백틱) 템플릿 리터럴 방식 

console.log(string3) 

