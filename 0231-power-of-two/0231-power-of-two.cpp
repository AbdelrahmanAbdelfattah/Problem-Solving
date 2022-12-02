class Solution {
public:
    
    unsigned int countSetBits(unsigned int n)
{
    unsigned int count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}
    
    bool isPowerOfTwo(int n) {
        if( n<0)
            return false;
        return countSetBits(n) ==1;
    }
};