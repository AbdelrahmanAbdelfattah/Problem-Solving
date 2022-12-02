class Solution {
public:
   map<int,int> mp;
vector<int>per;

void perm ( vector<int> & nums,vector<vector<int>> & res)
{
    if(per.size()==nums.size() )
    {
        res.push_back(per);
        return;
    }
    for( auto i:mp)
    {
        if( mp[i.first] >0)
        {
            mp[i.first]--;
            per.push_back(i.first);
            perm(nums,res);
            mp[i.first]++;
            per.pop_back();
        }

    }
}

vector<vector<int>> permuteUnique(vector<int>& nums)
{
    vector<vector<int>>  res;
    sort(nums.begin(),nums.end());
    for( auto i: nums )
        mp[i]++;
    perm(nums,res);
    return res;

}
};