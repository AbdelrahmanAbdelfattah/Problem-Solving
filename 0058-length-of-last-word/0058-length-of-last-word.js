var lengthOfLastWord = function (s) {
  result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let asci = s[i].charCodeAt(0);
    if ((asci >= 65 && asci <= 90) || (asci >= 97 && asci <= 122)) {
      for (let j = i; j >= 0; j--) {
        asci = s[j].charCodeAt(0);
        if ((asci >= 65 && asci <= 90) || (asci >= 97 && asci <= 122)) result++;
        else break;
      }
      break;
    }
  }
  return result;
};
