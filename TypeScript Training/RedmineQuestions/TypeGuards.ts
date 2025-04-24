class Dog{
    constructor(){}
}
class Cat{
    constructor(){}
}
const animals:object[]=[new Dog(),new Cat(),new Dog()];
function filterDogs(animals:object[]):object[]{
    return animals.filter(obj=>obj instanceof Dog);
}
console.log(filterDogs(animals));