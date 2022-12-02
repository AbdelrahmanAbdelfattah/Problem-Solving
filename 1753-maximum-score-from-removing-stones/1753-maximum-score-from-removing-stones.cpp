class Solution {
public:
    int maximumScore(int a, int b, int c) 
    {
        priority_queue<int> maxheap;
        maxheap.push(a);
        maxheap.push(b);
        maxheap.push(c);
        
        int score = 0;
        while (maxheap.size() >= 2) {
            int x = maxheap.top();
            maxheap.pop();
            int y = maxheap.top();
            maxheap.pop();
            if ( x > 0 && y > 0) {
                maxheap.push(x - 1);
                maxheap.push(y - 1);
                score++;
            }
        }
        return score;
    }
};