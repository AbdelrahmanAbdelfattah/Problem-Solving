class Solution {
public:
   void rotate(vector<int>& nums, int k) {

    // if the array is [{1,2,3},{4,5}] nad n is 2 we need to move last n element to the head of        the array
    // to be [4,5,1,2,3] this will be done by reverse the hole array to be like this [5,4,3,2,1]        then
    // reverse the first k elements then revers the rest of the array

    reverse (nums.begin() ,nums.end() );

    k %= nums.size();
    reverse (nums.begin() ,nums.begin()+k );

    reverse(nums.begin()+k,nums.end());


}
};