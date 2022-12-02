class Solution {
public:
    
int maxOperations(vector<int>& nums, int k)
{
    int n =0 ;
    int i =0 , j =nums.size()-1;
    sort(nums.begin(),nums.end());
    while(i<j)
    {
        if(nums[i]+nums[j]==k)
            i++,j-- ,n++ ;
        else if(nums[i]+nums[j]<k)
            i++;
        else
            j--;
    }
    return n;
}
};