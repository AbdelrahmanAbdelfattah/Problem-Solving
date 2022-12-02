class Solution {
public:
    vector<int> decode(vector<int>& encoded)
{
    int n  =0 ;
    for( int i=1 ;i<=encoded.size()+1 ;i++)
        n^=i;
    for( int i = 1; i<encoded.size() ;i+=2)
        n^=encoded[i];
    vector<int> ans;
    ans.push_back(n);
    for( int i = 0 ; i<encoded.size();i++)
        ans.push_back(n^encoded[i]) , n ^=encoded[i];
    return ans;
}
};