class Solution {
public:
    bool isPowerOfFour(int n) 
    {
        if( n>0 && !(n&(n-1)) )
        {
            int cnt=0 ;
            while( n>1 )
            {
                n>>=1;
                cnt++;
            }
            if(cnt%2==0)
                return true ;
            else 
                return false;
        }
        return false ;
    }
};