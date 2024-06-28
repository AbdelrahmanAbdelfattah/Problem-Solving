/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  let curr = 0,
    max = 0,
    i = 0;
  while (i < arr.length) {
    // even
    if (i % 2 == 0 && i < arr.length - 1) {
      if (arr[i] < arr[i + 1]) {
        curr++;
        max = Math.max(max, curr);
      } else {
        max = Math.max(max, curr);
        curr = 0;
      }
    } //odd
    else if (i % 2 == 1 && i < arr.length - 1) {
      if (arr[i] > arr[i + 1]) {
        curr++;
        max = Math.max(max, curr);
      } else {
        max = Math.max(max, curr);
        curr = 0;
      }
    }
    i++;
  }
  i = 0;
  curr = 0;
  while (i < arr.length) {
    // even
    if (i % 2 == 1 && i < arr.length - 1) {
      if (arr[i] < arr[i + 1]) {
        curr++;
        max = Math.max(max, curr);
      } else {
        max = Math.max(max, curr);
        curr = 0;
      }
    } //odd
    else if (i % 2 == 0 && i < arr.length - 1) {
      if (arr[i] > arr[i + 1]) {
        curr++;
        max = Math.max(max, curr);
      } else {
        max = Math.max(max, curr);
        curr = 0;
      }
    }
    i++;
  }
  return max + 1;
};