class Solution {
public:
   long long maximumImportance(int n, vector<vector<int>>& roads)
{
    vector<int> freq (n,0);
    for( int i=0 ;i< roads.size() ;i++ )
    {
        freq[roads[i][0]]++ , freq[roads[i][1]]++;
    }
    vector<pair<int,int> > v ;
    for( int i=0 ;i< freq.size() ;i++ )
        v.push_back( { freq[i] , i} );
    sort(v.rbegin() ,v.rend());
    vector<int> val (n);
    int temp =n;
    for( int i=0 ;i< n ;i ++ )
    {
        val[v[i].second] =temp--;
    }
    long long ans =0 ;
    for( int i=0 ;i< roads.size() ;i++ )
        ans+= (val [roads[i][0]]+val[roads[i][1]]);
    
    return ans;


}
};