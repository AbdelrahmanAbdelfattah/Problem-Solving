class Solution {
public:
   int mostWordsFound(vector<string>& sentences) 
{
    int ans = INT_MIN;
    for( int i =0 ;i< sentences.size() ;i++ )
    {
        int cnt=0 ;
        for( int j=0 ;j< sentences[i].size() ;j++ )
        {
            if(sentences[i][j]==' ')
                cnt++;
        }
        ans= max(ans,cnt+1);
    }
    return ans;
}
};