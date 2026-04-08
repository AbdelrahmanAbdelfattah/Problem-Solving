/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // first solution with n2 time
    /*
    for (let i =0 ; i< nums.length ; i++ )
    {
        let sum = nums[i ]; 
        for (let j =i+1 ; j <nums.length ; j ++  )
        {
             if(nums[i ] + nums [ j ] == target )
               return [i , j ];
        }
    }
    */

    // second solution 
    let mp = new Map (); 
    for  (let i =0 ;i < nums.length ; i++ )
    {
        if (!mp.has(nums[i]))
        {
            mp.set(nums[i] , i);
        }
    }

    for (let i = 0 ;i < nums.length ; i++)
    {
        if(mp.has(target - nums[i]) && i != mp.get(target-nums[i]) )
        {
            return [i , mp.get(target - nums[i])  ]  ;
        }
    }

};