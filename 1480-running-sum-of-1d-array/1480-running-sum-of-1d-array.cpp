class Solution {
public:
   vector<int> runningSum(vector<int>& nums) 
{
    vector<int > pre (nums.size());
    pre[0]=nums[0];
    for( int i =1 ;i< pre.size() ;i++  )
        pre[i] =pre[i-1] +nums[i];
    return pre;
}
};