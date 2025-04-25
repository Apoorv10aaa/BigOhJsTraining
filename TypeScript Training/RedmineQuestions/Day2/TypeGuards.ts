class Dog{
    constructor(){}
}
class Cat{
    constructor(){}
}
type AnimalArr=(Dog | Cat)[];
let animals:AnimalArr=[new Dog(),new Cat(),new Dog()];

function filterDogs(animals:AnimalArr):AnimalArr{
    return animals.filter(obj=> obj instanceof Dog);
}
console.log(filterDogs(animals));