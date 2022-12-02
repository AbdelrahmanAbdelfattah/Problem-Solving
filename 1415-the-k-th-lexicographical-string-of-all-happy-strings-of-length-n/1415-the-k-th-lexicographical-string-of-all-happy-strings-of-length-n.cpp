class Solution {
public:
    vector<string> strings;

void backtraching(string s ,int n )
{
    if(s.size() == n )
    {
        strings.push_back(s);
        return;
    }
    if(s.size()==0)
    {
        backtraching(s+'a',n);
        backtraching(s+'b',n);
        backtraching(s+'c',n);

    }
    else if(s[s.size()-1]=='a')
    {
        backtraching(s+'b' ,n );
        backtraching(s+'c',n);
    }
    else if(s[s.size()-1]=='b')
    {
        backtraching(s+'a' ,n );
        backtraching(s+'c',n);
    }
    else if(s[s.size()-1]=='c')
    {
        backtraching(s+'a' ,n );
        backtraching(s+'b',n);
    }
}


string getHappyString(int n, int k)
{
    backtraching("",n);
    if(strings.size() <k)
        return "";
    return strings[k-1];
}
};