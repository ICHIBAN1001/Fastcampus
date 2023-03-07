// Optional Chaining 

const userA = {
  name: 'BETTY',
  age: 21,
  address: {
    country: 'Korea',
    city: 'Daegu'
  }
}
const userB = {
  name: 'ICIBAN',
  age: 28
}

function getCity (ageUser) {
  return ageUser.address?.city || '該当の住所なし。'
}

console.log(getCity (userA))
console.log(getCity (userB))