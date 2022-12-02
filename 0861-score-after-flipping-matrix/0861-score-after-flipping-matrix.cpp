class Solution {
public:
    int matrixScore(vector<vector<int>>& grid)
{
    for( int i=0 ;i< grid.size() ;i++)
    {
        if(grid[i][0] == 0)
            for( int j =0 ;j<grid[i].size() ;j++ )
                grid[i][j] = ! grid[i][j];
    }

    for( int i=0 ;i<grid[0].size() ;i++ )
    {
        int ones =0 ,zeros =0;
        for( int j =0 ; j <grid .size() ;j++ )
        {
            if(grid[j][i])
                ones++ ;
            else
                zeros++;
        }
        if( zeros >ones )
        {
            for( int j =0 ; j <grid .size() ;j++ )
                grid[j][i] = !grid[j][i];
        }
    }
    
    int n =0 ;
    for( int i =0 ;i< grid.size() ;i++ )
    {
        int num =0 , p =0 ;
        for( int j = grid[i].size()-1; j >=0 ;j-- )
        {
            num+= grid[i][j] *(1<<p) , p++ ;
        }
        n+=num;
    }
    
    return n;
}
};