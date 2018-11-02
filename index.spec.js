const deepFreeze = require('./index');

describe('deepFreeze', () => {
  it('should not mutate input', () => {
    const input = [1, 2, 3];
    const freezed = deepFreeze(input);

    expect(freezed == input).toBeFalsy();
  });

  it('should deepFreeze an array', () => {
    const input = [1, 2, 3];
    const freezed = deepFreeze(input);

    freezed[0] = 3;

    expect(freezed).toEqual(input);
  });

  it('should deepFreeze an array having object element', () => {
    const input = [1, 2, { x: 1 }, 4, 5];
    const freezed = deepFreeze(input);

    freezed[2] = 3;

    expect(freezed).toEqual(input);
  });

  it('should deepFreeze an object', () => {
    const input = { x: 1, y: { z: 2 }, t: null };
    const freezed = deepFreeze(input);

    freezed.y.z = 3;

    expect(freezed).toEqual(input);
  });
});
