class Solution {
public:
   
vector<int> findSmallestSetOfVertices(int n, vector<vector<int>>& edges)
{
    map<int ,vector<int> > graph ;
    for( int i=0 ;i< edges.size() ;i++ )
    {
        graph[edges[i][0]].push_back(edges[i][1]);
    }
    vector<int> freq (n,0);
    for( auto i: graph )
    {
        for( int j=0 ;j< i.second.size() ;j++ )
        {
            freq[i.second[j]]++;
        }
    }
    vector<int>res;
    for( int i =0 ;i< freq.size() ;i++ )
        if(freq[i]==0)
            res.push_back(i);
    return res;   
}
};