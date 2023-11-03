class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        
    vector<int> v (nums.size());
        
    for (int i=0 ; i < nums.size() ;i++ )
    {
        int idx = (k%nums.size()+i)%nums.size();
        v[idx] =nums[i];
    }
    
        
    for (int i=0 ; i < nums.size() ;i++ )
    {

        nums[i] = v[i];
    }
        
        
        
    }
};