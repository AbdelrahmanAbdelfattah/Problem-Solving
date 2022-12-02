class Solution {
public:
bool canConstruct(string ransomNote, string magazine)
{
    map<char,int>ran , mag;
    for( int i=0 ;i< ransomNote.size() ;i++ )
        ran[ransomNote[i]]++;
    for( int i =0 ;i< magazine.size() ;i++)
        mag[magazine[i]]++;
    for( auto i : ran)
    {
        if(i.second > mag [i.first])
            return false;
    }
    return true;
}
};