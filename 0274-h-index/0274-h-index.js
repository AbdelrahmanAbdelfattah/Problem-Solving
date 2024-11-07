var hIndex = function (citations) {
  // Sort in ascending order
  citations.sort((a, b) => a - b);
  
  let length = citations.length;
  let h = 0; // h-index counter
  
  // Iterate from the end of the sorted array
  for (let i = 0; i < length; i++) {
    // Calculate how many papers have at least `length - i` citations
    if (citations[i] >= length - i) {
      h = length - i;
      break; // Once we find the h-index, we can stop
    }
  }
  
  return h;
};
