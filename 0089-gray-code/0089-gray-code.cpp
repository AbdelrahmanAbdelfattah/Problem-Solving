class Solution {
public:
vector<int> grayCode(int n)
{
    vector<int >nums ;
    for( int i=0 ;i< (1<<n) ;i++ )
        nums.push_back((i^(i>>1)));
    return nums;

}


};