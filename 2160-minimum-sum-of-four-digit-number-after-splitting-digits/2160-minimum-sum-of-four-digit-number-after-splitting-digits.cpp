class Solution {
public:
int minimumSum(int num)
{
    vector<int>digits;
    while( num )
    {
        digits.push_back(num%10);
        num=num/10;
    }
    sort(digits.begin(),digits.end());
    int num1 = digits[3] + digits[0]*10;
    int num2 = digits[2] + digits[1]*10;
    return num1+num2;
}
};