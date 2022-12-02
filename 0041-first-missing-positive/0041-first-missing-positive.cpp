class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
      set<int>st;
      for( int i= 0;i<nums.size() ;i++)  
      {
          if(nums[i] >0)
              st.insert(nums[i]);
      }
      int i=1;
      for( auto it = st.begin() ; it!= st.end() ;it++,i++)
      {
          if(*it != i)
              return i;
      }
        return i;
    }
};