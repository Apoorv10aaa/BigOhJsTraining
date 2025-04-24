var user1 = {
  dbId: 10,
  userId: 22,
  email: "hfhf",
  startTrial: function () {
    return "";
  },
  getCoupon: function (name, val) {
    return 63636;
  },
  githubToken: 212322,
};
var superUser1 = {
  role: "Admin",
  dbId: 10,
  userId: 22,
  email: "hfhf",
  startTrial: function () {
    return "";
  },
  getCoupon: function (name, val) {
    return 63636;
  },
  githubToken: 212322,
};
// genrics
function func1(val) {
  return val;
}
func1(40);
func1("ggg");
function func2(heroes) {
  for (var _i = 0, heroes_1 = heroes; _i < heroes_1.length; _i++) {
    var hero = heroes_1[_i];
    console.log(hero);
  }
}
var func3 = function (heroes) {
  return heroes[0];
};
func2([1, true, 3, "4"]);
