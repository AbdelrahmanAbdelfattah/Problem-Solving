class Solution {
public:

vector<vector<int>>ans;
vector<int>nums;
void backtrack (vector<int> & v  , int i  , int k)
{

    if( i==v.size() )
    {
        if(nums.size()== k)
            ans.push_back(nums);
        return;
    }
    nums.push_back(v[i] );
    backtrack(v,i+1 , k);
    nums.pop_back();
    backtrack(v,i+1 ,k);


}

vector<vector<int>> combine(int n, int k)
{
    vector<int> v, nums ;
    for( int i=1 ;i<=n ;i++ )
        v.push_back(i);
    backtrack(v,0,k);
    return ans;
}
};