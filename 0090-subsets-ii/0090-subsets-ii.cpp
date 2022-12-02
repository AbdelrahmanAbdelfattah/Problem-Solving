class Solution {
public:


vector<vector<int>> re;
vector<int> v ;
void backtracking (int i , vector<int>& nums )
{
    if( i == nums.size())
    {
        re.push_back(v);
        return;
    }
    v.push_back(nums[i]);
    backtracking(i+1 ,nums);
    v.pop_back();
    while( i+1< nums.size() && nums[i]==nums[i+1])i++;
    backtracking(i+1,nums);

}

vector<vector<int>> subsetsWithDup(vector<int>& nums)
{
    sort(nums.begin() ,nums.end());
    backtracking(0,nums);
    return re;
}
};