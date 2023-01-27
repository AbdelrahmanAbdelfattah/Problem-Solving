/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    for( let i =0 ; i< arr.length ;i++ )
        {
            if(arr[i]<=k )
                k++;
        }
    return k ;
};


// ///int findKthPositive(vector<int>& arr, int k) {
//         for (auto a : arr) if (a <= k) k++;
//         return k;
//     }