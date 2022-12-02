class Solution {
public:
    bool valid(vector<vector<char>>&grid ,int i , int j )
{
    if(i >=0 && i<grid.size() && j>=0 && j<grid[i].size() )
        return true;
    return false;
}

void dfs( int i, int j , vector<vector<char>>&grid , vector<vector<int>>&vis )
{
    vis[i][j]=1 ;
    if( valid( grid,i+1 ,j) &&!vis[i+1][j] )
        if( (grid[i+1][j]-'0' == 1))
            dfs(i+1,j,grid,vis);

    if(valid(grid,i,j+1) &&!vis[i][j+1] )
        if((grid[i][j+1]-'0' == 1))
            dfs(i,j+1,grid,vis);

    if(valid(grid , i , j-1) &&!vis[i][j-1])
        if( (grid[i][j-1]-'0' == 1))
            dfs(i,j-1,grid,vis);
    
    if(valid(grid , i-1 , j) &&!vis[i-1][j])
        if( (grid[i-1][j]-'0' == 1))
            dfs(i-1,j,grid,vis);
}


int numIslands(vector<vector<char>>& grid)
{
    vector<vector<int>>vis(grid.size() , vector<int> (grid[0].size(),0));
    int n =0 ;
    for( int i=0 ;i< grid.size() ;i++ )
    {

        for( int j=0 ;j< grid[i].size() ;j++ )
        {
            if( !vis[i][j] && (grid[i][j]-'0' ==1))
            {
                dfs(i,j ,grid ,vis) ;
                n++;
            }
        }
    }
    return  n;
}
};