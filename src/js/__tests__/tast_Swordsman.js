/* eslint-disable no-undef */
import Swordsman from '../Characters/Swordsman';

test('Creation completed successfully', () => {
  const swordsman = new Swordsman('Hero');
  const character = {
    name: 'Hero',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(swordsman).toEqual(character);
});
