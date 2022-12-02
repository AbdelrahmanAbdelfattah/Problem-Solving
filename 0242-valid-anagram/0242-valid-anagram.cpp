class Solution {
public:
   bool isAnagram(string s, string t) {

    if(s.size() != t.size() )
        return false;
    map<char,int> ss ,tt;
    for( int i=0 ; i< s.size() ;i++ )
        ss[s[i]]++ , tt[t[i]]++;
    for( auto i: ss)
        if(i.second != tt[i.first])
            return false;
    return true;    
}
};