class Solution {
public:
vector<vector<int>> reconstructMatrix(int upper, int lower, vector<int>& colsum)
{

    vector<vector<int>> ans(2, vector<int>(colsum.size()));
    for (int i = 0; i < colsum.size(); upper -= ans[0][i], lower -= ans[1][i] , i++) 
    {
        ans[0][i] = colsum[i] == 2 || (colsum[i] == 1 && lower < upper);
        ans[1][i] = colsum[i] == 2 || (colsum[i] == 1 && !ans[0][i]);
    }
    return upper == 0 && lower == 0 ? ans : vector<vector<int>>();
    
    
}
};