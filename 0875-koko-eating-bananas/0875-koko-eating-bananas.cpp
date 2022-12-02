class Solution {
public:
const bool valid (const vector<int>&piles ,long long  n ,int h )
{

    for( int i=0 ;i< piles.size() ;i++)
    {
        if(piles[i]%n)
            h--;
        h-= (piles[i]/n);
    }
    if(h<0)
        return false;
    return true;
}
int minEatingSpeed(vector<int>& piles, int h)
{
    long long s= 1,en = *std::max_element(piles.begin(), piles.end()) ,ans= 0;
    while(s<=en )
    {
        long long  mid =s+(en-s)/2;
        if( valid(piles , mid, h ))
            en= mid-1 , ans =mid ;
        else
            s =mid+1;
    }
    return ans;
}
};