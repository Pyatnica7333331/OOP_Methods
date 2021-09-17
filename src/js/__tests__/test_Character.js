/* eslint-disable no-undef */
import Character from '../Characters/Character';

test('Should be created valid person', () => {
  const testCharacter = new Character('Model', 'Daemon');
  const newPerson = {
    name: 'Model',
    type: 'Daemon',
    health: 100,
    level: 1,
  };
  expect(testCharacter).toEqual(newPerson);
});
test('Person Undead has invalid name', () => {
  expect(() => new Character('ModelCharacter', 'Undead')).toThrow('Неверное имя, должно быть от 2 до 10 символов');
});
test('Person has invalid type of character', () => {
  expect(() => new Character('Model', 'Bear')).toThrow('Неверный тип');
});

test('should check the levelUp of dead', () => {
  const deadCase = () => {
    const deadPerson = new Character('iAmDead', 'Bowman');
    deadPerson.health = 0;
    deadPerson.levelUp();
  };
  expect(deadCase).toThrow('Нельзя повысить уровень умершего');
});

test('should levelUp the defence, attack, level', () => {
  const testCharacter = new Character('Model', 'Zombie');
  testCharacter.attack = 40;
  testCharacter.defence = 10;
  testCharacter.levelUp();
  const expected = {
    name: 'Model',
    type: 'Zombie',
    defence: 12,
    attack: 48,
    health: 100,
    level: 2,
  };

  expect(testCharacter.defence).toEqual(expected.defence);
  expect(testCharacter.attack).toEqual(expected.attack);
  expect(testCharacter.level).toEqual(expected.level);
});

test('should damage successfully', () => {
  const testCharacter = new Character('Model', 'Swordsman');
  testCharacter.defence = 50;
  testCharacter.damage(50);
  const expected = {
    name: 'Model',
    type: 'Swordsman',
    defence: 50,
    health: 75,
    level: 1,
  };
  expect(testCharacter.health).toBe(expected.health);
});

test('should damage if health < 0', () => {
  const testCharacter = new Character('Model', 'Magician');
  testCharacter.defence = 50;
  testCharacter.health = 10;
  testCharacter.damage(50);
  expect(testCharacter.health).toBe(0);
});
