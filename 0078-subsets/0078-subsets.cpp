class Solution {
public: 
    vector<vector<int>> ans;
    vector<int>a;
    void sum (int i ,int n ,vector<int >&nums )
    {
    if(i == n )
    {
        ans.push_back(a);
        return;
    }
    a.push_back(nums[i]);
    sum(i+1,n ,nums);
    a.pop_back();
    sum(i+1,n,nums);
    }
    
    vector<vector<int>> subsets(vector<int>& nums) 
    {
        sum(0,nums.size() ,nums);
        return ans;
    }
};