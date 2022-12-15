class Solution {
public:

bool isPossible(vector<int>& nums, int maxOperations, int penalty) {
    int requiredOps = 0;
    for (int n : nums) {
        int x = n / penalty;
        if (n % penalty == 0) x--;
        requiredOps += x;
    }
    return requiredOps <= maxOperations;
}

int minimumSize(vector<int>& nums, int maxOperations) {
    int start = 1, end = *max_element(nums.begin(), nums.end());
    int minPenalty = end;
    while (start <= end) {
        int penalty = (start+end)/2;
        if (isPossible(nums, maxOperations, penalty))
            minPenalty = penalty, end = penalty-1;
        else
            start = penalty+1;
    }

    return minPenalty;
}

};