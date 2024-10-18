import { Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from "../src/index";

test ('name test', () => {
    let result = new Character(1, "Bowman", 100, 1, 10, 20);
    expect(result).toEqual(Error("Имя должно быть строкой!"));
})