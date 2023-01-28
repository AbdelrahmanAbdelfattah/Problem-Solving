class Solution {
public:


int specialArray(vector<int>& nums)
{
    int l =0 , r= nums.size();
    while( l<=r)
    {
        int mid = ( l+r)/2;
        int n=0 ;
        for( int i=0 ;i< nums.size() ;i++ )
        {
            if(nums[i]>=mid)
                n++;
        }
        if( n == mid )
            return mid;
        else if( n>mid )
        {
                        l= mid+1;

        }
        else
        r= mid-1;
    }
    return -1;
}
};