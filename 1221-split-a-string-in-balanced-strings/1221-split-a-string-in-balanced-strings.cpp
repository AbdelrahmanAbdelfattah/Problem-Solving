class Solution {
public:
    int balancedStringSplit(string s) 
    {
        int score =0 , left =0 , right =0 ;
        for( int i=0 ;i< s.size() ;i++ )
        {
            if( s[i ] == 'L')
                left ++;
            else
                right++;
            if( left == right )
                score++ , left =0 ,right =0 ;
        }
        return score;
    }
};