class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums)
{
    map<int ,int >mp;
    for( int i= 0 ;i< nums.size() ;i++ )
        mp[nums[i]]=1;
    vector<int> v ;
    for( int i=1 ;i<=nums.size() ;i++ )
    {
        if( mp[i] == 0 )
            v.push_back(i);
    }
    return v;
}
};