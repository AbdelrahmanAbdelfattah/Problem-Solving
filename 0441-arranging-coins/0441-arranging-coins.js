/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let l = 0 , r = 100000000 , ans=0 ;
    while( l<=r )
        {
        let  mid = Math.floor(( l+r)/2);
        if( Math.floor((mid *(mid+1))/2 <=n))
        {
            ans = mid ;
            l= mid+1;
        }
        else
        {
            r=mid-1;
        }
        }
    return ans ;
    
};


//  int arrangeCoins(int n)
// {
//     long long l =0 , r= 1e8 , ans ;
//     while( l<=r )
//     {
//         long long mid = ( l+r)/2;
//         if( (mid *(mid+1))/2 <=n)
//         {
//             ans = mid ;
//             l= mid+1;
//         }
//         else
//         {
//             r=mid-1;
//         }
//     }
//     return ans;
// }