class Solution {
public:
    
const bool valid (vector<vector<char>>& board)
{
    for( int i=0 ;i< 9 ;i ++ )
    {
        map<char,int>mp;
        for( int j = 0 ;j< 9 ;j++ )
        {
            if(board[i][j] != '.')
                mp[board[i][j]]++;
            if(mp[board[i][j]]>1)
                return false;
        }
    }

    for( int i=0 ;i< 9 ;i ++ )
    {
        map<char,int>mp;
        for( int j = 0 ;j< 9 ;j++ )
        {
            if(board[j][i] !='.')
                mp[board[j][i]]++;
            if(mp[board[j][i]]>1)
                return false;
        }
    }

    for( int i = 0 ;i< 9 ;i+=3)
    {
        for( int j =0 ;j< 9;j+= 3)
        {
            map<char,int>mp;
            for( int  k= i ; k< i+3  ;k++ )
            {
                for( int h =j ; h<j+3 ; h++ )
                {
                    if( board[k][h]!='.')
                        mp[board[k][h]]++;
                    if( mp[board[k][h]]>1)
                        return false;
                }
            }
        }
    }

    return true;
}

bool isValidSudoku(vector<vector<char>>& board)
{
    return valid(board);
}
};