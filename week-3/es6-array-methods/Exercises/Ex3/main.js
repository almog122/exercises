
let newUsers = users
                    .filter(user => user.address.zipcode[0] == 5)
                    .map(user => {return user.id })

console.log(newUsers)