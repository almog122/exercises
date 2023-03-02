const userNameAndComapny = function(user){
    user.forEach(u => console.log(u.name + " lives in "+ u.address.city+ ", and owns the company " + u.company.name)) 
}

userNameAndComapny(users);
