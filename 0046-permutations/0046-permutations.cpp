class Solution {
public:

    vector<vector<int>> permute(vector<int>& nums)
{
    vector<vector<int>>res;
    findpermute(nums,0,res);
    return res;
}
    void findpermute (vector<int > &num , int begin ,vector<vector<int>> &res  )
{
    if(begin >=num.size())
    {
        res.push_back(num);
        return;
    }
    for( int i= begin ;i<num.size() ;i++ )
    {
        swap(num[begin],num[i]);
        findpermute(num,begin+1,res);
        swap(num[begin],num[i]);
    }
}


};