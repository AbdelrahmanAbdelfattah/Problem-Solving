class Solution {
public:
    int searchInsert(vector<int>& v, int target) {
    int s= 0  ,en =v.size() -1 ;
    while(s<=en )
    {
        int mid =(s+en)/2;
        if( v[mid]==target)
             en =mid-1;
        else if (v[mid ]<target)
            s= mid+1;
        else
            en= mid-1;
    }
    return s;
}
};