var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  
  let length = citations.length;
  let h = 0; // h-index counter
  
  for (let i = 0; i < length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1; 
    } else {
      break; 
    }
  }
  
  return h;
};
