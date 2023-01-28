/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let idx1 = 0,
    idx2 = numbers.length - 1;
  while (idx1 < idx2) {
    if( numbers[idx1] + numbers[idx2 ] === target )
    break;
    else if(numbers[idx1] + numbers[idx2 ] > target )
    idx2--;
    else 
    idx1++;
  }
  return [idx1+1,idx2+1];
};
