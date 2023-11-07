class Solution {
public:

int removeElement(vector<int>& nums, int val)
{
    sort(nums.begin(),nums.end());
    int cnt = 0;
    int end = nums.size()-1;

    for (int i=0 ;i< nums.size() ;i++ )
    {
       if(nums[i] == val )
       {
           cnt++;
       }
    }
    int n = cnt;
    for ( int i=0 ;i< nums.size() ;i++ )
    {
        bool br =false;
        if (nums[i ] == val)
        {
            for (int j  =i ;  j < nums.size() ; j++ )
            {
                if (cnt )
                {
                    swap(nums[j] , nums[end--]) ,cnt--;
                }
                else
                    break;
            }
        }
        if(br)
            break;
    }
    return nums.size()-n;
}

};