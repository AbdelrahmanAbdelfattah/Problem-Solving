/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  for( let i=0 ;i<= nums.length ; i++ )
  {
    let n = 0;
    for( let j =0 ;j< nums.length ; j++ )
    {
      if( nums[ j ] >= i  )
      n ++ ;

    }
    if( n == i )
    return i;
  }
  return -1;
};