class Solution {
public:
vector<int> twoSum(vector<int>& numbers, int target)
{
    int idx1  =0 , idx2 = numbers.size()-1 ;
    while(idx1 <numbers.size() && idx2 >=0 )
    {
        if( numbers[idx1] +numbers[idx2] ==target )
            break;
        else if( numbers[idx1] +numbers[idx2] > target )
            idx2--;
        else if( numbers[idx1] +numbers[idx2] <target )
            idx1++;
    }
    return vector<int>  {idx1+1,idx2+1} ;
}
};