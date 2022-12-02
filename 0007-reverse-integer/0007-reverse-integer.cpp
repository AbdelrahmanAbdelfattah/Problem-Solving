class Solution {
public:
int reverse(int x)
{
    vector<int >digit ;

    while( x )
    {
        digit.push_back((x%10));
        x/=10;
    }
    
    long long l =0;
    for( int i= 0; i<digit.size()  ;i++ )
    {
        l+= ( digit[i] * pow(10,digit.size()-1-i));

    }


    if( l > INT_MAX || l < INT_MIN)
        return 0;
    return l;
}
};