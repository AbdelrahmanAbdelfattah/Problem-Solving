class Solution {
public:
vector<string> findAllRecipes(vector<string>& recipes, vector<vector<string>>& ingredients, vector<string>& supplies)
{
    map<string , vector<string>> adj;
    map<string , int >indegree;
    for( int i=0 ;i< ingredients .size() ;i++  )
    {
        for( int j =0 ;j< ingredients[i].size() ;j++ )
        {
            adj [ingredients[i][j]].push_back(recipes[i]);
            indegree[recipes[i]]++;
        }
    }
    vector<string> ans ;
    queue<string>q;
    for( int i=0 ;i< supplies.size() ;i++ )
        q.push(supplies[i]);
    while( !q.empty() )
    {
        string front = q.front();
        q.pop();
        for( auto i: adj[front])
        {
            indegree[i]--;
            if( !indegree[i])
            {
                q.push(i);
                ans.push_back(i);
            }
        }

    }
    return ans;

}

};