// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
   int firstBadVersion(int n)
{

    long long  l = 1  , r = n ,ans = 0 ;
    while( l<=r)
    {
        long long  mid = (l+r)/2;
        if( isBadVersion(mid))
            r= mid-1  , ans =mid ;
        else 
            l= mid+1;
    }

    return ans;
}
};