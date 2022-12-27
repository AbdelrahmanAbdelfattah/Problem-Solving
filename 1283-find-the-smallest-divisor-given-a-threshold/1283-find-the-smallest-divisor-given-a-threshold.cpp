class Solution {
public:
   int valid ( vector <int >& nums , int mid )
{
    int sum =0 ;
    for( int i=0 ;i< nums.size() ;i++ )
    {
        sum += ceil( (1.0 * nums[i]) / mid );
    }
    return sum ;

}

int smallestDivisor(vector<int>& nums, int threshold)
{
    int l =1  , r= *max_element(nums.begin(),nums.end());
    int smallmid = INT_MAX;
    while( l<=r )
    {
        int mid =(l+r) /2 ;
        if(valid(nums , mid ) <= threshold )
        {
            smallmid = min (smallmid , mid );
            r= mid-1;
        }
        else
        {
            l=mid+1;
        }
    }
    return smallmid;
}
};