class Solution {
public:
void findpermute (string s , int begin ,vector<string> &res  )
{
    if(begin==s.size())
    {
        res.push_back(s);
        return;
    }
    if(!isalpha(s[begin]))
        findpermute(s,begin+1,res);
    else
    {
        s[begin]= tolower(s[begin]);
        findpermute(s,begin+1,res);
        s[begin]= toupper(s[begin]);
        findpermute(s,begin+1,res);
    }
}

vector<string> letterCasePermutation(string s)
{

    vector<string> res;
    findpermute(s,0,res);
    
    return res;
    
}
};