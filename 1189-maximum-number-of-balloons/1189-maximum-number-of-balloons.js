var maxNumberOfBalloons = function (text) {
  let mp = new Map();

  for (let i = 0; i < text.length; i++) {
    if (
      text[i] === "b" ||
      text[i] === "a" ||
      text[i] === "l" ||
      text[i] === "o" ||
      text[i] === "n"
    ) {
      let char = text[i];

      if (!mp.has(char)) mp.set(char, 1);
      else mp.set(char, mp.get(char) + 1);
    }
  }

  let required = { b: 1, a: 1, l: 2, o: 2, n: 1 };
  let maxInstances = Infinity;

  for (let char in required) {
    if (!mp.has(char)) {
      return 0;
    }
    maxInstances = Math.min(
      maxInstances,
      Math.floor(mp.get(char) / required[char])
    );
  }
  return maxInstances;
};
