class Solution {
public:
int maximalNetworkRank(int n, vector<vector<int>>& roads)
{
    int mx = INT_MIN;
    bool con [n][n] ;
    memset(con, false ,sizeof (con));
    vector<int> v (n,0);
    for( int i=0 ;i< roads.size() ;i++ )
    {
        v[roads[i][0]]++;
        v[roads[i][1]]++;
        con[roads[i][0]][roads[i][1]]=1;
        con[roads[i][1]][roads[i][0]]=1;
    }
    for( int i=0 ;i< n ;i++ )
    {
         for( int j=i+1 ;j<n ;j++ )
         {
             int sum = v[i]+v[j];
             if( con[i][j])
                 sum--;
             mx= max(mx,sum);
         }
    }
    
    return mx;

}

};