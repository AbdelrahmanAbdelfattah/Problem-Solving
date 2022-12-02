class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        
        if (strs.size() == 0)
        return "";
 
    if (strs.size()  == 1)
        return strs[0];
 
    // Sort the given array
    sort(strs.begin(), strs.end() );
 
    // Find the minimum length from
    // first and last string
    int en = min(strs[0].size(),
                 strs[strs.size() - 1].size());
 
    // Now the common prefix in first and
    // last string is the longest common prefix
    string first = strs[0], last = strs[strs.size() - 1];
    int i = 0;
    while (i < en && first[i] == last[i])
        i++;
 
    string pre = first.substr(0, i);
    return pre;
        
    }
};