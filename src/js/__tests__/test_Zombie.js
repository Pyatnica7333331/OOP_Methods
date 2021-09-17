/* eslint-disable no-undef */
import Zombie from '../Characters/Zombie';

test('Creation completed successfully', () => {
  const zombie = new Zombie('Hero');
  const character = {
    name: 'Hero',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(zombie).toEqual(character);
});
