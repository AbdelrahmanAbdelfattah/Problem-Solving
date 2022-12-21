class Solution {
public:
   
int rangeSum(vector<int>& nums, int n, int left, int right)
{
    int s =nums.size() ;
    for( int i=0 ;i< s ;i++ )
    {
        long long sum = nums[i];
        for( int j =  i +1 ; j<s;j++ )
        {
            sum+=nums[j];
            nums.push_back(sum);
        }
    }
    sort(nums.begin(),nums.end());
    long long  sum =0;
    for( int i= left-1 ;i<right ;i++ )
    {
        sum+=nums[i];
        sum = sum % (1000000000+7);
    }

    return sum ;
}
};