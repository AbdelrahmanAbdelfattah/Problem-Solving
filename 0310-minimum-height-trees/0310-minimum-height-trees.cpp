class Solution {
public:
   vector<int> findMinHeightTrees(int n, vector<vector<int>>& edges)
{
       if(n==1 )
           return {0};
       else if( n==2 )
           return {0,1};
    map<int ,vector<int>> adj ;
    map<int,int>indegree ;
    for( int i=0 ;i< edges.size();i++ )
    {
        adj[edges[i][0]].push_back(edges[i][1]);
        adj[edges[i][1]].push_back(edges[i][0]);
        indegree[edges[i][0]] ++;
        indegree[edges[i][1]]++;
    }
    queue<int>q;
    for( auto i: indegree )
    {
        if( i.second ==1)
        {
            q.push(i.first);
        }
    }

    vector<int>ans;

    while(! q.empty() )
    {
        ans.clear();
        int num = q.size();
        while(num--)
        {
            auto front  = q.front() ;
            q.pop();
            ans.push_back(front);
            for( auto i : adj[front] )
            {
                indegree[i]--;
                if(indegree[i] ==1 )
                {
                    q.push(i);
                }
            }
        }

    }


    return ans;
}


};