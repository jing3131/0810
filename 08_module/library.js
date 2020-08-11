export function playWith(obj) {                                 // export 匯出(公開)
    obj.makeSound();
}

export class Animal {
    constructor(weightValue = 1) {
        this.weight = weightValue;
    }
    makeSound() {
        alert("Animal: ...");
    }
}

export default class Dog extends Animal {                       // default 為library主要類別
    constructor(location = "Earth", weightValue) {
        super(weightValue);
        this.location = location;
    }
    makeSound() {
        alert("Won! Won!");
    }
}
