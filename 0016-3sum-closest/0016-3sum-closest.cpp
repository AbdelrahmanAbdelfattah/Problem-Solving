class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target)
{
    int n =nums.size();
    if(n<3)
        return 0;
    int closest =nums[0]+nums[1]+nums[3];
    sort(nums.begin(),nums.end());
    for( int i =0 ;i< n-2 ;i++)
    {
        int j =i+1 , k= n-1;
        while(j<k)
        {
            int cur = nums[i]+nums[j]+nums[k];
            if(cur == target )
                return cur;
            else if( abs(target-cur) <abs(target - closest))
                closest =cur;
            if(cur >target)
                k--;
            else
                j++;
        }
    }
    return closest;
}
};