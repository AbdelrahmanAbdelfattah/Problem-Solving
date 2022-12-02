class Solution {
public:
  
void dfs( int u , vector<vector<int>>&graph , vector<int>&vis )
{
    vis[u]=1;
    for( int i=0 ;i< graph[u].size() ;i++ )
    {
        if( !vis[graph[u][i]] )
        {
            dfs(graph[u][i] , graph ,vis);
        }
    }
}


int findCircleNum(vector<vector<int>>& isConnected)
{
    vector<vector<int>>graph(isConnected.size());
    for( int i=0 ;i< isConnected.size();i++)
    {
        for(int j=i ;j<isConnected[i].size() ;j++ )
        {
            if(isConnected[i][j])
            {
                graph[i].push_back(j);
                graph[j].push_back(i);
            }
        }
    }
    int n =0;
    vector<int>vis(isConnected.size() ,0);
    for(int i=0 ;i< isConnected.size() ;i++ )
    {
        if( !vis[i])
        {
            dfs(i,graph,vis);
            n++;
        }
    }
    return n;

}
};