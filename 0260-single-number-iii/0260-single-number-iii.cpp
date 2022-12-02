class Solution {
public:
    vector<int> singleNumber(vector<int>& nums)
{
    int n=0 ;
    for( int i =0 ;i< nums.size() ;i++ )
        n^=nums[i];
    int bit ;
    for( int i= 0; i < 32 ;i++ )
    {
        if( n& (1<<i))
            bit =i ;
    }
    int x=0;
    for( int i=0 ;i< nums.size() ;i++ )
    {
        if(nums[i]& (1<<bit))
            x^=nums[i];
    }
     return vector<int> ()={x ,n^x};
}
};