class Solution {
public:
int removeElement(vector<int>& nums, int val)
{
    int n=nums.size() ;
    sort(nums.begin(),nums.end());
    for( int i=0 ;i< nums.size() ;i++)
    {
        if(nums[i]== val)
        {
            for( int j =i+1 ;j<nums.size(); j++)
            {
                if(nums[i]!=nums[j])
                {

                    swap(nums[i],nums[j]);
                    break;
                }
            }
        }
    }
    for( int i = 0 ;i<n ;i++ )
        if( nums[i]==val)
            n-= (n-i);
    return n;
}
};