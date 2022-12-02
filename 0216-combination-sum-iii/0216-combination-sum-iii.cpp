class Solution {
public:
   
vector<vector<int>> ans;
void solve(int i, vector<int>& arr, vector<int>& temp, int target ,int k)
{
    if(target == 0)
    {
       unordered_map<int,int> mp ={};
        for( auto &j: temp )
        {
            mp[j]++;
            if(mp[j]>1 )
            {
                return;
            }
        }
        if(temp.size() !=k)
            return;
        ans.push_back(temp);
        return;
    }

    if(target < 0)
        return;

    if(i == arr.size())
        return;

    solve(i + 1, arr, temp, target ,k);

    temp.push_back(arr[i]);
    solve(i+1, arr, temp, target - arr[i] , k);
    temp.pop_back();

}


vector<vector<int>> combinationSum3(int k, int n)
{
    vector<int> temp ;
    vector<int > arr = {1,2,3,4,5,6,7,8,9};
    solve(0,arr,temp,n,k);
    return ans;
}

};