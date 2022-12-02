class Solution {
public:
    void dfs ( int u , vector<vector<int>> &graph ,vector<int> & vis  ,vector<int> & ans)
{
    vis[u]=1;
    int n = 1;
    for( int i =1 ;i<=4; i++)
    {
        bool found = true;
        for( int j =0 ;j< graph[u].size() ;j++ )
        {
            if( ans[graph[u][j]] ==i)
            {
                found = false;
                break;
            }
        }
        if(found)
        {
            n=i;
            break;
        }
    }
    ans[u]=n;
    for( int i=0 ;i<graph[u].size() ;i++ )
    {
        if( !vis[graph[u][i]] )
        {
            dfs(graph[u][i] ,graph,vis ,ans);
        }
    }
}


vector<int> gardenNoAdj(int n, vector<vector<int>>& paths)
{
    vector<vector<int>> graph(n+1);
    for( int i=0 ;i< paths.size() ;i++ )
    {
         graph [ paths [i] [0] ].push_back(paths[i][1]);
         graph [ paths [i] [1] ].push_back(paths[i][0]);
    }
    vector<int>vis (n+1,0);
    vector<int>ans ( n+1,0);
    for( int i =0 ;i< n ;i ++ )
    {
        if(!vis [i+1])
            dfs(i+1 , graph,vis,ans);
    }
    dfs(1,graph,vis,ans);
    ans.erase(ans.begin());
    return ans;

}
};