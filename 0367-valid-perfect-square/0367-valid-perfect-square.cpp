class Solution {
public:
bool isPerfectSquare(int num)
{
    if(num==1)
        return true;
    long long s= 1, en =num;
    while(s<=en)
    {
        long long mid =(s+en)/2;
        long long sq =mid*mid;
        if(sq==num)
            return true;
        else if(mid*mid > num)
            en =mid-1;
        else
            s= mid+1;
    }
    return false;
}


};