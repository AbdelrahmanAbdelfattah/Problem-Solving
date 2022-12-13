class Solution {
public:
    
vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) 
{
    vector<bool> v;
    for( int i=0  ;i< candies.size() ;i++)
    {
        bool valid = true;
        for( int j = 0 ; j< candies.size() ; j++)
        {
            if( j==i)
                continue;
            if( candies[i] +extraCandies <candies[j])
            {
                valid= false;
                break;
            }
        }
        v.push_back(valid);
    }
    return v;

}
};