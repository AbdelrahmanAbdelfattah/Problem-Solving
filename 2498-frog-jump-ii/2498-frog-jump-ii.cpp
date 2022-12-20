class Solution {
public:
    int maxJump(vector<int>& stones) {
        int res = stones[1]-stones[0]; 
        for(int i = 3; i < stones.size(); i+=2) res = max(res, stones[i]-stones[i-2]); 
        for(int i = 2; i < stones.size(); i+=2) res = max(res, stones[i]-stones[i-2]); 
        return res;
    }
};