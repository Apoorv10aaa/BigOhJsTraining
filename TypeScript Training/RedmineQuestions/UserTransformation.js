function transformKeys(user, updates) {
    for (var key in updates) {
        if (user[key]) {
            user[updates[key]] = user[key];
            delete user[key];
        }
    }
    return user;
}
var user = {
    firstName: "Harsh",
    lastName: "singh",
    age: 10
};
console.log(transformKeys(user, { firstName: "first", lastName: "last" }));
