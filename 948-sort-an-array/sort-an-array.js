var sortArray = function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let l = 0,
    r = arr.length - 1,
    mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};


var merge = function (left, right) {
  let res= [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return res.concat(left.slice(i)).concat(right.slice(j));
}