class Solution {
public:
int lengthOfLongestSubstring(string s)
{
    if( s.size() ==0 )
        return 0 ;
    set<char> st;
    int mx= 0;
    for( int i =0 ;i< s.size() ;i++ )
    {
        for( int j=i ;j< s.size() ;j++ )
            if(st.count(s[j])==0)
            {
                st.insert(s[j]);
                mx= max((int)st.size() , mx);
            }
        else
            {
            st.clear();
            break;
            }
    }
    return mx;

}
};