class Solution {
public:
    bool valid( vector<int>& candies , int mid  ,long long k)
{
    long long n =0 ;
    for( int i=0 ;i< candies.size() ;i++ )
    {
        n+= (candies[i]/mid);
    }
    return  n >= k;
    
}

int maximumCandies(vector<int>& candies, long long k)
{
    long long sum =0 ;
    for( int i=0 ;i< candies.size() ;i++ )
        sum += candies[i];
    if (sum < k)
        return 0;
    int l =1 , r = *max_element(candies.begin(),candies.end()) , maxcan = INT_MIN;
    while( l<=r )
    {
        int mid = (l+r)/2;
        if( valid( candies ,mid , k ) )
            l =mid+1 , maxcan = max(maxcan,mid);
        else
            r=mid-1;
    }
    return maxcan;

}
};