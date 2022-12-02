class Solution {
public:
    string getHint(string secret, string guess) 
    {
        map<char,int> sec ,gus;
    int cnt =0;
    for(int i=0 ;i< secret.size(); i++ )
    {
        if(secret[i]== guess[i])
            cnt++;
        sec[secret[i]]++ , gus[guess[i]]++ ;
    }
    int t=0 ;
    map<char,bool> mp;
    for( int i =0 ;i< secret .size() ;i++ )
    {
        if(! mp[secret[i]])
        {
            t+=min (sec[secret[i]] , gus[secret[i]] );
            mp[secret[i]] = true;
        }
    }
    return to_string(cnt)+'A'+ to_string(t-cnt)+'B';
    }
};