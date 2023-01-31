class Solution {
public:
    bool judgeSquareSum(int c) 
{
    int i =0 , j = sqrt(c) ;
    while (i<= j)
    {
        if( 1LL*i*i + 1LL*j*j == c )
            return true;
        else if(1LL*i*i + 1LL*j*j > c )
            j--;
        else if (1LL*i*i + 1LL*j*j < c )
            i++;
    }
    return false;
}
};