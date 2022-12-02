class Solution {
public:
int maxProfit(vector<int>& prices)
{
    int mx = 0 , mn =INT_MAX ;
    for( int i=0 ;i< prices .size() ;i++ )
    {
        mn =min ( mn, prices[i]);
        mx =max( mx , prices [i] - mn );
    }
    return mx;
}
};