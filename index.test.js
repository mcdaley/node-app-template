//-----------------------------------------------------------------------------
// index.test.js
//-----------------------------------------------------------------------------
import { circle, square } from './index';

describe('Area', () => {
  it('Calculate area for circle', () => {
    expect(circle(4)).toBe(50.24);
  })

  it('Calculates area for a sqaure', () => {
    expect(square(5)).toBe(25);
  })
})
