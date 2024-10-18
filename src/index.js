class Character {
	constructor(name, type, health, level, attack, defence) {
		this.name = name;
		this.type = type;
		this.health = health;
		this.level = level;
		this.attack = attack;
		this.defence = defence;

		if (typeof this.name !== 'string') {
			throw new Error("Имя должно быть строкой!");
		}

		if (this.name.length < 2 || this.name.length > 10) {
			throw new Error("Имя должно быть не меньше 2 символов и не больше 10 символов!");
		}

		if (this.type === "Bowman" || this.type === "Swordsman" || this.type === "Magician" || this.type === "Daemon" || this.type === "Undead" || this.type === "Zombie") {
            this.type = type;
            
        } else {
            throw new Error("Недопустимый тип персонажа!");
        }
	}
}

class Bowerman extends Character {
	constructor(name) {
		super(name, "Bowman", 100, 1, 25, 25)
	}
}

class Swordsman extends Character {
	constructor(name) {
		super(name, "Swordsman", 100, 1, 40, 10)
	}
}

class Magician extends Character {
	constructor(name) {
		super(name, "Magician", 100, 1, 10, 40)
	}
}

class Daemon extends Character {
	constructor(name) {
		super(name, "Daemon", 100, 1, 10, 40)
	}
}

class Undead extends Character {
	constructor(name) {
		super(name, "Undead", 100, 1, 25, 25)
	}
}

class Zombie extends Character {
	constructor(name) {
		super(name, "Zombie", 100, 1, 40, 10)
	}
}

let bowerman = new Bowerman("Лучник");
let swordsman = new Swordsman("Мечник");
let magician = new Magician("Маг");
let daemon = new Daemon("Демон");
let undead = new Undead("Нежить");
let zombie = new Zombie("Зомби");

console.log(bowerman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);
