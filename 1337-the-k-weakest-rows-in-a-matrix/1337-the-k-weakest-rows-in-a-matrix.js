class Solution {
public:
vector<int> kWeakestRows(vector<vector<int>>& mat, int k)
{
    vector<pair<int,int>> v;
    for( int i=0 ;i< mat.size() ;i++ )
    {
        int n=0 ;
        for( int j = 0 ;j< mat[i].size() ;j++ )
        {
            if( mat[i][j] )
                n++;
        }
        v.push_back({n,i});
    }
    sort( v.begin() , v.end());
    vector<int > ans ;
    for( int i=0 ;i< k ; i ++ )
    {
        ans.push_back(v[i].second);
    }
    return ans;
}
};