class Solution {
public:
 int specialArray(vector<int>& nums)
{
    for( int i =0 ;i<= nums.size() ;i++ )
    {
        int n = 0 ;
        for( int  j = 0 ;j < nums.size() ;j++ )
        {
            if( nums[j]>=i)
                n++;
        }
        if( n == i)
            return i;
    }
    return -1;
}
};