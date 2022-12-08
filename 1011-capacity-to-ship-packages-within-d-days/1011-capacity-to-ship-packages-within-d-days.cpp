class Solution {
public:
int valid ( vector<int> & weight , int capacity , int days  )
{
    int count =0 ;
    int sum =0 ;
    for( int i=0 ;i< weight.size() ;i++ )
    {
        if( sum + weight [i] > capacity)
        {
            count++;
            sum=weight[i];

            continue;
        }
        sum+=weight[i];

    }
    count++;

    if( count==days)
        return 0 ;
    else if( count >days)
        return 1;
    else if( count <days)
        return -1;
    return 0;
}
int shipWithinDays(vector<int>& weights, int days)
{
    int st = INT_MIN ,  en=0 , ans =    INT_MAX ;
    for( int i=0 ;i< weights.size();i++ )
    {
        st = max(st,weights[i]);
        en +=weights[i];
    }
    while(st<=en) {
        int mid ;
        mid = (st + en) / 2 ;
        if (valid(weights, mid, days) == 0 )
            en = mid - 1 ,ans = min(mid ,ans);
        else if (valid(weights, mid, days) == 1)
            st = mid + 1;
        else if( valid(weights, mid, days) == -1)
            en = mid -1;

    }
    return st;
}
};