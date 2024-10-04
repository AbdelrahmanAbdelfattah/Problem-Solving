var ladderLength = function (beginWord, endWord, wordList) {
  const bankSet = new Set(wordList);
  if (!bankSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];
  const visited = new Set([beginWord]);
  const geneChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  while (queue.length > 0) {
    const [currentGene, mutations] = queue.shift();
    if (currentGene === endWord) {
      return mutations;
    }

    for (let i = 0; i < currentGene.length; i++) {
      for (const char of geneChars) {
        if (char !== currentGene[i]) {
          // Create a new mutation by changing one character
          const newGene =
            currentGene.slice(0, i) + char + currentGene.slice(i + 1);

          // If the new mutation is in the bank and hasn't been visited yet
          if (bankSet.has(newGene) && !visited.has(newGene)) {
            visited.add(newGene); // Mark the gene as visited
            queue.push([newGene, mutations + 1]); // Add new mutation to the queue
          }
        }
      }
    }
  }
  return 0;
};