function Animal (name) {
  this.name = name;  
}
Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
    constructor(){
    super();
}

  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}

dog = new Dog()
dog.speak()