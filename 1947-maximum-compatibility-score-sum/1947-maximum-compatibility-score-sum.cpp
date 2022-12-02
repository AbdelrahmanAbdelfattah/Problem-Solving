class Solution {
public:
  int maxCompatibilitySum(vector<vector<int>>& students, vector<vector<int>>& mentors)
{
    int n = students.size() ;
    vector<int> position (n);
    for( int i =0 ;i< n ;i++ )
        position[i]=i;
    int mx= INT_MIN;
    do
    {
        int sum =0;
        for(int i =0 ;i< n ;i++ )
        {
            for( int j = 0 ;j< students[i].size() ;j++)
            {
                if( students[i][j] == mentors[position[i]][j])
                    sum++;
            }
        }
        mx= max(sum,mx);
    }
    while(next_permutation(position.begin() ,position.end()));
    return mx;
}
};