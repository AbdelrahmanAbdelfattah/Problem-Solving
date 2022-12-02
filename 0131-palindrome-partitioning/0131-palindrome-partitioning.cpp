class Solution {
public:

bool isPalindrom ( string &s ,int start ,int end)
{
    for( int i = start , j =end ; i<=end&& j>=0 ;i++ ,j--)
    {
        if(s[i] !=s[j])
            return false;
    }
    return true;
}

void backtrack(int index ,vector<vector<string>> &res , vector<string> &path ,string &s)
{
    //base case
    if( index == s.size() )
    {
        res.push_back(path);
        return;
    }
    for( int i= index ;i<s.size() ;i++ )
    {
        if(isPalindrom(s,index,i))
        {
            path.push_back(s.substr(index, i-index+1));
            backtrack(i+1,res,path,s);
            path.pop_back();
        }
    }

}

vector<vector<string>> partition(string s)
{
    vector<vector<string>> res ;
    vector<string>path;
    backtrack(0,res,path,s);
    return res;
}



};