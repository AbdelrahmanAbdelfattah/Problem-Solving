class Solution {
public:
    int divide(int dividend, int divisor) {
        long long l =(long long)dividend/divisor;
        if(l >INT_MAX )
            return INT_MAX;
        else if(l <INT_MIN )
            return INT_MIN;
        
        return l;
    }
};