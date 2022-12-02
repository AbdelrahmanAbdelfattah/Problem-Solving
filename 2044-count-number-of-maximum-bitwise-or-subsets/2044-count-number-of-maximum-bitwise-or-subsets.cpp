class Solution {
public:
int subset(vector<int> &nums, int i, int a,int b)
{
    int ans =0;
    if(i<0)
        return 0;
    if(a == (b|nums[i]))
        ans =1;
    return ans + subset(nums,i-1,a,b) + subset(nums,i-1,a,b|nums[i]);
}

int countMaxOrSubsets(vector<int>& nums) {
    
    int a=0;
    
    for(auto i:nums)
    {
        a = a|i;
    }
    
    int ans = subset(nums,nums.size()-1,a,0);
        
    return ans ;
    
}
};