class Solution {
public:
   int minPairSum(vector<int>& nums)
{
    int l =0 ,r =nums.size()-1;
    sort(nums.begin() ,nums.end() );
    int mx =INT_MIN;
    while (l<r)
    {
        mx =max(mx , nums[l] +nums[r]);
        l++;
        r--;
    }
    return mx;
}
};