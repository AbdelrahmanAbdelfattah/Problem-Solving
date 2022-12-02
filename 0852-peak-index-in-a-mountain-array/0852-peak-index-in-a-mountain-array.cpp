class Solution {
public:
 
int peakIndexInMountainArray(vector<int>& arr) {

    if( arr.size()==3 )
    {
        if( arr[1]>arr[0] && arr [1] >arr[2])
            return 1;
    }
    int st = 0 , en =arr.size()-2;
    while( st<=en)
    {
        int mid =(st+en) /2;

        if( arr[mid] > arr[mid-1] && arr[mid] >arr[mid+1])
            return mid;
        else if( arr[mid] < arr[mid-1] && arr[mid] >arr[mid+1])
            en =mid-1;
        else if( arr[mid] > arr[mid-1] && arr[mid] < arr[mid+1] )
            st=mid+1;
    }


    return 0;
}

};