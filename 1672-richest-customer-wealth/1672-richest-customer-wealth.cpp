class Solution {
public:
   int maximumWealth(vector<vector<int>>& accounts) 
{
    int sum =0 ,mx = INT_MIN;
    for( int i=0 ;i< accounts.size() ;i++ )
    {
        for( int j=0 ;j< accounts[i].size() ;j++ )
        {
            sum +=accounts[i][j];
        }
        mx = max(sum,mx);
        sum =0;
    }
    return mx;
}
};