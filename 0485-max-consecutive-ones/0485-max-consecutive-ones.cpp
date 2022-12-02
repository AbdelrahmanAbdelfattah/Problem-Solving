class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) 
    {
        int ans =0 , mx =0;
        for( int i=0 ;i< nums.size();i++ )
        {
            if(nums[i]== 1)
            {
                ans++;
                mx =max(ans,mx);
            }
            else 
                mx =max(ans,mx)  , ans=0;;
        }
        return mx;
    }
};