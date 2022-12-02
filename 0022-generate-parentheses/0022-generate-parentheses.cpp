class Solution {
public:
    vector<string>valid;

void backtracking(int n ,string s,int left ,int right  )
{
    if(s.size() == 2*n)
    {
        valid.push_back(s);
        return;
    }
    if(left < n )
    {
        backtracking(n,s+'(' ,left+1 ,right);
    }
    if(right < left)
    {
        backtracking(n,s+')' ,left ,right+1);
    }
}

vector<string> generateParenthesis(int n)
{
    backtracking(n,"(",1,0);
    return valid;
}
};