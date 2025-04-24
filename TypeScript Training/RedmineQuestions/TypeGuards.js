var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var animals = [new Dog(), new Cat(), new Dog()];
function filterDogs(animals) {
    return animals.filter(function (obj) { return obj instanceof Dog; });
}
console.log(filterDogs(animals));
