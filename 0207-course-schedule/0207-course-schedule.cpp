class Solution {
public:
   bool checkCycle( int node ,vector<vector<int>> &graph, vector<int> & vis ,vector<int>&visDfs )
{
    vis[node] =1;
    visDfs[node] =1;

    for( int  i= 0 ;i< graph[node].size() ;i++ )
    {
        if( !vis[graph[node][i]])
        {
            checkCycle(graph[node][i], graph, vis, visDfs);
        }
        if(vis[graph[node][i]] && visDfs[graph[node][i]])
            return true;
    }
    visDfs[node]=0 ;
    return false;
}

bool isCycle (vector<vector<int>> &graph , int n)
{
    vector<int>vis(n ,0 );
    vector<int>visDfs(n,0);
    for( int i=0 ; i< n; i++ )
    {
        if( !vis[i])
        {
            if(checkCycle(i,graph,vis,visDfs))
                return true;
        }
    }
    return false;
}
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites)
{
    vector<vector<int>> graph(numCourses);
    for( int i=0 ;i< prerequisites.size() ;i++)
    {
        graph[prerequisites[i][1]].push_back(prerequisites[i][0]);
    }
    if(isCycle(graph,numCourses))
        return false;
    return true;
}
};