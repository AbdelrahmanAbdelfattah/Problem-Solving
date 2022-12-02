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

void TopologicaalSort(  int u ,vector<vector<int>>&graph , vector<int> &vis ,stack<int>&st)
{
    vis[u] =1;
    for( int i= 0 ;i< graph[u].size() ;i++ )
    {
        if( !vis[graph[u][i]])
        {
            TopologicaalSort(graph[u][i], graph,vis ,st);
        }
    }
    st.push(u);
}
vector<int> TopologicalSortUnit (vector<vector<int>>&graph ,int num )
{
    vector<int>v;
    stack<int> st;
    vector<int> vis(num , 0);
    for( int i =0 ;i< graph.size() ;i++ )
    {
        if(!vis[i])
            TopologicaalSort(i,graph,vis,st);
    }
    while(!st.empty())
    {
        v.push_back(st.top());
        st.pop();
    }
    return v;
}

vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites)
{
    vector<vector<int> > graph (numCourses );
    for( int i=0 ;i< prerequisites.size() ;i++ )
    {
        graph[prerequisites[i][1]].push_back(prerequisites[i][0]);   
    }
    if(isCycle(graph,numCourses))
    {
        return {};
    }
    vector<int>ans = TopologicalSortUnit(graph ,numCourses);
    return ans;
}
};