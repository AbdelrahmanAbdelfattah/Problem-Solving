class Solution {
public:
bool canVisitAllRooms(vector<vector<int>>& rooms)
{
    int  n= rooms.size();
    vector<int> vis ( n,0);

    queue<int>q ;
    q.push(0);
    while(!q.empty())
    {
        int u =q.front() ;
        vis[u]=1;
        q.pop();
        for( int i=0 ;i< rooms[u].size() ;i++ )
        {
            if( vis[rooms[u][i]] ==0  )
            {
                q.push(rooms[u][i]);
            }
        }
    }
    for( int i=0 ;i< vis.size() ;i++ )
        if( vis [i] == 0)
            return false;

    return true;

}
};