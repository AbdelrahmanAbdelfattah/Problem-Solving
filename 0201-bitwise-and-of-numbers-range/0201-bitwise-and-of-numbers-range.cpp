class Solution {
public:
    int rangeBitwiseAnd(int left, int right)
{
    int ans= 0;
    for( int i=30 ; i>=0 ;i -- )
    {
        if (((1<<i) & left ) != ((1<<i) & right ))
            break;
        else
            ans |= (left &(1<<i));
    }
    return ans;
}
};