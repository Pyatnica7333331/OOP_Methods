/* eslint-disable no-undef */
import Daemon from '../Characters/Daemon';

test('Creation completed successfully', () => {
  const daemon = new Daemon('Hero');
  const character = {
    name: 'Hero',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(daemon).toEqual(character);
});
