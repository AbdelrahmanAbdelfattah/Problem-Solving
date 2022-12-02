class Solution {
public:
    int strStr(string haystack, string needle) {
     
        int n =-1;
        for( int i= 0 ;i<haystack .size( ); i++)
        {
            if(haystack[i] == needle[0])
            {
                bool valid =true;
                for( int j= 0 , k =i ;j< needle.size( ); j++ , k++ )
                {
                    if(haystack[k]!=needle[j])
                    {
                        valid =false ;
                        break;
                    }
                }
                if(valid)
                    return i ;
            }
        }
        
        return -1;
    }
};