//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	getter(species){
		return species;
	}
	makeSound(species){
		return `The ${species} makes a sound`;
	}
}

class Dog extends Animal {
	bark(){
		retrun `woof`;
	}
}

class Cat extends Animal {
	purr(){
		return `purr`;
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
