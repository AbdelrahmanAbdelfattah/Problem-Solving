class Solution {
public:
bool validPath(int n, vector<vector<int>>& edges, int source, int destination)
{
    vector< vector<int> >mp(n);
    for( int i=0 ;i< edges .size() ;i++ )
        mp[edges[i][0]].push_back(edges[i][1]) , mp[edges[i][1]].push_back(edges[i][0]);
    vector<bool > visit ( n , false);
    queue<int>q ;
    q.push(source);
    while(!q.empty())
    {
        int u =q.front();
        q.pop();
        if(u == destination)
            return true;
        for( int i =0 ;i< mp[u].size() ;i++ )
        {
            if( !visit[mp[u][i]] )
            {
                visit[mp[u][i]] =1 ;
                q.push(mp[u][i]);
            }
        }
    }
    return false;
}

};