class Solution {
public:
   string s="";
bool con = true;
int i=0;
void backtracking(string c  ,int n , vector<string>&nums)
{
    if(c.size() == n)
    {
        if(i>=nums.size()||c!=nums[i])
        {
            s=c;
            con= false;
            return ;
        }
        else if(c==nums[i])
        {
            i++;
            return;
        }
    }
    else if(con)
    {
        backtracking(c+"0" ,n,nums);
        backtracking(c+"1",n,nums);
    }
    else
        return;



}

string findDifferentBinaryString(vector<string>& nums)
{
    sort(nums.begin(),nums.end());
    int n = nums[0].size();
    backtracking("",n,nums);
    return s;

}

};