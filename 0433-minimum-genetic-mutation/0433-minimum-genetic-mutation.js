var minMutation = function (startGene, endGene, bank) {
  const bankSet = new Set(bank);
  if (!bankSet.has(endGene)) return -1;

  let queue = [[startGene, 0]];
  const visited = new Set([startGene]);

  const geneChars = ["A", "C", "G", "T"];

  while (queue.length > 0) {
    const [currentGene, mutations] = queue.shift();
    if (currentGene === endGene) {
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
     return -1;
};