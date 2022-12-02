class Solution {
public:
  
void dfs (int from ,int to , vector<vector<int>>&graph , vector<int>&vis ,bool &found)
{
    vis[from]=1;
    if( from == to )
    {
        found = true;
        return;
    }
    for( int i= 0; i < graph[from].size() ;i++ )
    {
        if( !vis[graph[from][i]])
        {
            dfs(graph[from][i] ,to ,graph,vis,found);
        }
    }

}

vector<bool> checkIfPrerequisite(int numCourses, vector<vector<int>>& prerequisites, vector<vector<int>>& queries)
{
    vector<vector<int>> graph(numCourses);
    for( int i=0 ;i< prerequisites .size() ;i++ )
    {
        graph[prerequisites[i][0]].push_back(prerequisites[i][1]);
    }
    vector<bool>ans;
    for( int i =0 ;i< queries .size() ;i++ )
    {
        bool found = false;
        vector<int> vis (numCourses ,0);
        dfs(queries[i][0],queries[i][1] ,graph,vis,found);
        ans.push_back(found);
    }
    return ans;

}
};