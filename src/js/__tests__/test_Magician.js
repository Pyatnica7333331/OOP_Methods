/* eslint-disable no-undef */
import Magician from '../Characters/Magician';

test('Creation completed successfully', () => {
  const magician = new Magician('Hero');
  const character = {
    name: 'Hero',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(magician).toEqual(character);
});
