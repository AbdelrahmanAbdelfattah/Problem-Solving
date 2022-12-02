class Solution {
public:
    vector<int> findClosestElements(vector<int>& arr, int k, int x) 
    {
        int i = lower_bound(arr.begin(),arr.end(),x)-arr.begin();
        int l = i-1 , r= i;
        while(k--)
        {
            
            if( l<0 || (r<arr.size()  && abs(arr[l]-x)>abs(arr[r]-x)))
                r++;
            else 
                l--;
        }
        return vector<int>(arr.begin()+l+1 ,arr.begin()+r);
    }
};