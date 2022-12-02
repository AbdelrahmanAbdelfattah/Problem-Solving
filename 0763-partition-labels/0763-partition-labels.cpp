class Solution {
public:
 vector<int> partitionLabels(string s)
{
    vector<int> last(28) ;
    for( int i =0 ;i< s.size() ;i++ )
    {
         last [s[i]-'a'] =i;
    }
   
    vector<int>ans;
    int a =0, en =0;
    for( int i=0 ;i< s.size() ;i++ )
    {
        int st =i ;
        en =max(en, last[s[i] -'a']);
        if( st==en)
        {
            ans.push_back(en -a +1);
            a= en+1;
        }
    }
    return ans;
}
};