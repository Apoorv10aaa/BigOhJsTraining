function mergeUserData(users, data, option) {
  if (option === "purchase") {
    var _loop_1 = function (user) {
      user["purchases"] = data.filter(function (purchase) {
        return user["id"] === purchase["userId"];
      });
    };
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
      var user = users_1[_i];
      _loop_1(user);
    }
  } else {
    var _loop_2 = function (user) {
      user["reviews"] = data.filter(function (review) {
        return user["id"] === review["userId"];
      });
    };
    for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
      var user = users_2[_a];
      _loop_2(user);
    }
  }
  return users;
}
var users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Jim Brown", email: "jim@example.com" },
];
var purchases = [
  { userId: 1, item: "Laptop", price: 1200 },
  { userId: 2, item: "Phone", price: 800 },
  { userId: 1, item: "Mouse", price: 20 },
  { userId: 3, item: "Keyboard", price: 100 },
  { userId: 2, item: "Monitor", price: 200 },
];
console.log(mergeUserData(users, purchases, "purchase"));
