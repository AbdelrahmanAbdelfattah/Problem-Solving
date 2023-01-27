class Solution {
public:
    int arrangeCoins(int n)
{
    long long l =0 , r= 1e8 , ans ;
    while( l<=r )
    {
        long long mid = ( l+r)/2;
        if( (mid *(mid+1))/2 <=n)
        {
            ans = mid ;
            l= mid+1;
        }
        else
        {
            r=mid-1;
        }
    }
    return ans;
}
};