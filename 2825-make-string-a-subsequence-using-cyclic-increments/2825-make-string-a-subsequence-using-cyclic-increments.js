var canMakeSubsequence = function (str1, str2) {
  let p1 = 0,
    p2 = 0;

  while (p1 < str1.length && p2 < str2.length) {
    if (str1[p1] === str2[p2]) {
      p1++, p2++;
    } else {
      let char = str1[p1];
      if (char === "z") char = "a";
      else {
        char = String.fromCharCode(char.charCodeAt(0) + 1);
      }
      if (char == str2[p2]) {
        p1++, p2++;
      } else {
        p1++;
      }
    }
  }
  if (p2 == str2.length) return true;
  return false;
};