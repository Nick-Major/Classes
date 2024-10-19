import { Character } from "../src/index";

test('name test', () => {
    let player = new Character(1, "Swordsman", 100, 1, 40, 10);
    expect(player.name).toBeUndefined();
})