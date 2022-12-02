class Solution {
public:
vector<vector<int>> paths;
vector<int>path ;

void dfs ( int u ,int  &target  , vector<vector<int>>& graph)
{
    path.push_back(u);
    if( u== target)
    {
        paths.push_back(path);
        return;
    }
    for( int i=0 ;i< graph [u].size() ;i++ )
    {
        dfs(graph[u][i] ,target ,graph);
        path .pop_back();

    }

}


vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph)
{
    int t = graph.size()-1;
    dfs( 0, t , graph);
    return paths;
}

};