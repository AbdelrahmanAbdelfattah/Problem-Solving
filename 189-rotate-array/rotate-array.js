var rotate = function(nums, k) {
    let newArr = new Array(nums.length);
    for(let i = 0; i < nums.length; i++){
        newArr[(i + k) % nums.length] = nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = newArr[i];
    }
};