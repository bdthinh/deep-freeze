const isArray = value => Array.isArray(value);

const deepFreeze = object => {
  let freezed = isArray(object) ? [] : {};

  if (isArray(object)) {
    freezed = object.map(value => (value && typeof value === 'object' ? deepFreeze(value) : value));
  } else {
    const keys = Object.keys(object);

    keys.forEach(key => {
      const value = object[key];

      // eslint-disable-next-line
      freezed[key] = value && typeof value === 'object' ? deepFreeze(value) : value;
    });
  }

  return Object.freeze(freezed);
};

module.exports = deepFreeze;
