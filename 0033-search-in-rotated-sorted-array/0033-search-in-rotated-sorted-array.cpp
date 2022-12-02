class Solution {
public:
int search(vector<int>& nums, int target)
{
    int s= 0 ,en =nums.size() -1 ;
    while( s<=en)
    {
        int mid =(s+en)/2;
        int val =nums[mid ];
        if(val == target )
            return mid;
        else if ((val>=nums[s] ))
        {
            if(target<=val && target>=nums[s])
                en =mid-1;
            else
                s=mid+1;
        }
        else
        {
            if(target >=val && target<=nums[en])
                s=mid+1;
            else
                en =mid -1;
        }
    }


    return -1;

}
};