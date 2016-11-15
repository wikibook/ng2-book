abstract class SmallAnimals {
    abstract sound(): string;
    abstract name(): string;
    makeSound(): string {
        return `${this.name()} : ${this.sound()} `;
    }
}

class Mouse extends SmallAnimals{
    sound(): string{
        return "peep peep~";
    }
    name(): string{
        return "mouse";
    }
}

var mouse = new Mouse();
console.log(mouse.makeSound());