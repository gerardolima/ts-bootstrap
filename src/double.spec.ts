import { Chance } from 'chance'
import { double } from './double.js'

const chance = new Chance(jest.getSeed())

it('returns the double of the given number', () => {
  const n = chance.floating()
  expect(double(n)).toEqual(n * 2)
})