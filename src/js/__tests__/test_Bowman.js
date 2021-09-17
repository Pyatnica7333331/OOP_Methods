/* eslint-disable no-undef */
import Bowman from '../Characters/Bowman';

test('Creation completed successfully', () => {
  const bowman = new Bowman('BowSuper');
  const character = {
    name: 'BowSuper',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(bowman).toEqual(character);
});
