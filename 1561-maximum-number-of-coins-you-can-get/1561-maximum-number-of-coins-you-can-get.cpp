class Solution {
public:
    
int maxCoins(vector<int>& piles)
{
    int n =0 ;
    sort(piles.rbegin() , piles.rend());
    for( int i=0 ;i< piles.size() ; i +=2 )
    {
        n+=piles[i+1];
        piles.pop_back();
    }
    return n;
}
};