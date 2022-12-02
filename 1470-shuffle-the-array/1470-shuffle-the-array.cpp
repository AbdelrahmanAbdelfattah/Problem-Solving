class Solution {
public:
vector<int> shuffle(vector<int>& nums, int n)
{
    vector <int > v (2*n);
    int i =0 , j=nums.size()/2 ;
    bool is = true;
    for( int k=0 ;k< nums.size() ;k++  )
    {
        if(is )
        {
            v[k] =nums[i];
            i++;
            is  =  !is;
        }
        else
        {
            v[k]= nums[j ];
            j++;
            is = !is;
        }
    }
    return v;
}
};