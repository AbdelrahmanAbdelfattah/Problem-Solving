class Solution {
public:
int removeDuplicates(vector<int>& nums)
{
   int l =0  , r = 0 ;
   while (r<nums.size())
   {
       int cnt = 1 ;
       while ( r+1<nums.size() && nums[r] == nums[r+1])
       {
           r++;
           cnt++;
       }

       for (int i =0 ;i< min(2,cnt) ;i++ )
       {
           nums[l]=nums[r];
           ++l;
       }
       r++;
   }

   return l;


}

};