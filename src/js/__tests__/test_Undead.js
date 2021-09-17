/* eslint-disable no-undef */
import Undead from '../Characters/Undead';

test('Creation completed successfully', () => {
  const undead = new Undead('Hero');
  const character = {
    name: 'Hero',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(undead).toEqual(character);
});
