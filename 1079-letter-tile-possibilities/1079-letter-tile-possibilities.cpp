class Solution {
    public:
    
void backtrack(string  tiles, int l , int &count)
{
    count++;
    for( int i= l;i<tiles.size() ;i++ )
    {
        if( i!= l && (tiles[i]== tiles[l]))
            continue;
        swap(tiles[i],tiles[l]);
        backtrack(tiles,l+1,count);
    }
}

int numTilePossibilities(string tiles)
{
    int count  =-1;
    sort(tiles.begin(),tiles.end());
    backtrack(tiles,0,count);
    return count;
}
};
