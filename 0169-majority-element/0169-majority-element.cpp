class Solution {
public:
    int majorityElement(vector<int>& nums) {
        sort( nums.begin() ,nums.end());
        map<int,int>mp;
        for( int i=0 ; i<nums.size() ;i++ )
        {
            mp[nums[i]]++;
        }
        int mx =INT_MIN, n =0;
        for(auto it = mp.begin() ;it!=mp.end() ;it++ )
            if(it->second > n )
                mx=it->first , n =it ->second ;
        
        return mx ;
    }
};