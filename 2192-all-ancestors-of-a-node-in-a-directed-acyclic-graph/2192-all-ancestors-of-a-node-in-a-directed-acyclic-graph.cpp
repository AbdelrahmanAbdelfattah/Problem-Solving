class Solution {
public:
    void dfs (int from ,int to , vector<vector<int>>&graph , vector<int>&vis ,vector<vector<int>>&ans )
{
    vis[from]=1;

    for( int i= 0; i < graph[from].size() ;i++ )
    {
        if( !vis[graph[from][i]])
        {
            ans[graph[from][i]].push_back(to);
            dfs(graph[from][i] ,to ,graph,vis,ans);
        }
    }

}



vector<vector<int>> getAncestors(int n, vector<vector<int>>& edges)
{
    vector<vector<int>> graph(n);
    for( int i=0 ;i< edges .size() ;i++ )
    {
        graph[edges[i][0]].push_back(edges[i][1]);
    }
    vector<vector<int>>ans (n);
    for( int i  =0 ;i<  n ;i++ )
    {
        vector<int>vis(n,0);
         dfs(i,i,graph,vis,ans);
    }
    return ans;
}

};