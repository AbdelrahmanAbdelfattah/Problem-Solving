class Solution {
public:
    vector<int >a ;
vector<vector<int>> subset;
void sum(int i , vector<int> &nums)
{
    if(i== nums.size())
    {
        subset.push_back(a);
        return;
    }

    a.push_back(nums[i]);
    sum(i+1 ,nums);
    a.pop_back();
    sum(i+1 ,nums);
}

int subsetXORSum(vector<int>& nums)
{
    sum(0,nums);

    int sm =0 ;
    for( int i =0 ;i< subset.size() ;i++ )
    {
        int x =0 ;
        for( int  j =0 ;j< subset[i].size() ;j++)
        {
            x^=subset[i][j];
        }
        sm+=x;
    }
    return sm;
}
};