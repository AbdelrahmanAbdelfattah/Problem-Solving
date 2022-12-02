class Solution {
public:

int dfs(int u ,vector<bool> &vis ,unordered_map<int ,vector<int>> &graph)
{
    int cnt =0 ;
    vis[u]= true;

    for( int i=0 ;i<graph[u].size() ;i++)
    {
        if( !vis[abs(graph[u][i])])
        {
            cnt+=(graph[u][i]> 0) + dfs(abs(graph[u][i]) ,vis,graph);
        }
    }
    return cnt;
}

int minReorder(int n, vector<vector<int>>& connections)
{
    unordered_map<int ,vector<int>> graph ;


    for(auto c: connections)
    {
        graph[c[0]].push_back(c[1]);
        graph[c[1]].push_back(-c[0]);
    }

    vector<bool>vis(n,false);

    return dfs(0,vis,graph);

}


};