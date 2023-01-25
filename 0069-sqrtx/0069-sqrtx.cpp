class Solution {
public:
int mySqrt(int x) {
    int l =0 , r= 1e9 ,mid ;
    while(l<=r)
    {
         mid = (l+r)/2;
        if(1LL*mid*mid ==x  )
            return mid;
        else if(  1LL*mid*mid >x )
            r=mid-1;
        else if( 1LL*mid*mid <x)
            l= mid+1;
    }
    return r;
}
};