class Solution {
public:
 int cnt= 0;

void perm ( int l  ,vector<int>& v )
{
    if(l== v.size())
    {
        cnt++;
    }

    for( int i =l ; i<v.size() ;i++ )
    {
        swap(v[i] ,v[l ]);
        if(v[l] % +(l+1) ==0 || (l+1)%v[l] ==0)
            perm(l+1 ,v);
        swap(v[l],v[i]);
    }
}
int countArrangement(int n)
{
    vector<int > v ;
    for( int i =1; i<=n ;i++ )
        v.push_back(i);
    perm(0,v);
    return cnt;
}

};