var reverseWords = function (s) {
  let words = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      let word = "";
      let j = i;
      for (; j < s.length && s[j] != " "; j++) {
        word += s[j];
      }
      words.push(word);
      i = j;
    }
  }

  let new_s = "";
  for (let i = words.length-1; i >= 0; i--) {
    new_s += words[i];
    if (i != 0) new_s += " ";
  }

  return new_s;
};