/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeros = 0 , ones = 0 , twos = 0 ;
    for (let i = 0 ;i < nums.length ; i ++ )
    {
        if (nums[i] === 2 )
           twos++;
        else if (nums[i ] ===1)
            ones++;
        else 
             zeros++;       
    }
    let counter = 0; 
    
        while (zeros &&counter < nums.length)
        {
            nums[counter] = 0 ;
            zeros--;
            counter++; 
        }
        while (ones &&counter < nums.length)
        {
            nums[counter] = 1 ;
            ones--;
            counter++; 
        }
        while (twos &&counter < nums.length)
        {
            nums[counter] = 2 ;
            twos--;
            counter++; 
        }
    

};