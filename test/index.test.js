import xrange from '../src/index';

describe('xrange', () => {
  it('generates numbers from 0 if no parameter is provided', () => {
    const range = xrange();
    const first = range.next().value;
    expect(first).toBe(0);
  });

  it('generates numbers from start-parameter', () => {
    const range = xrange(5);
    const first = range.next().value;
    expect(first).toBe(5);
  });

  it('generates numbers from start-parameter to the end-parameter', () => {
    const range = xrange(5, 8);
    expect(range.next().value).toBe(5);
    expect(range.next().value).toBe(6);
    expect(range.next().value).toBe(7);
    expect(range.next().value).toBe(8);
    expect(range.next().done).toBe(true);
  });

  it('generates only one number if start-parameter equals the end-parameter', () => {
    const range = xrange(5, 5);
    expect(range.next().value).toBe(5);
    expect(range.next().done).toBe(true);
  });

  it('generates numbers in negative direction if end-parameter is less than start-parameter', () => {
    const range = xrange(5, 3);
    expect(range.next().value).toBe(5);
    expect(range.next().value).toBe(4);
    expect(range.next().value).toBe(3);
    expect(range.next().done).toBe(true);
  });

  it('generates numbers from start-parameter to the end-parameter and step by 1 if no by-parameter is specified', () => {
    const range = xrange(5, 8);
    expect(range.next().value).toBe(5);
    expect(range.next().value).toBe(6);
  });

  it('generates numbers from start-parameter to the end-parameter and step by specified by-parameter', () => {
    const range = xrange(5, 8, 2);
    expect(range.next().value).toBe(5);
    expect(range.next().value).toBe(7);
  });
});
