class Solution {
public:
string addBinary(string a, string b)
{
    int n = max((int)a.size(),(int)b.size())- min ((int)a.size(),(int)b.size());
    string zeros= "";
    for( int j =0 ;j <n ;j++ )
        zeros+='0';
    if( a.size()<b.size())
        a= zeros+a;
    else if( b.size() <a.size())
        b=zeros+b;

    char carry ='0' ;
    string ans="";
    for( int i= a.size()-1 ;i>=0 ;i-- )
    {
        if( a[i] == '0' && b [i] == '0' && carry =='0')
            ans+='0' ,carry='0';
        else if( (a[i] == '0' && b [i] == '0' && carry =='1') )
            ans+= '1' ,carry ='0';
        else if((a[i] == '1' && b [i] == '0' && carry =='0') || (a[i] == '0' && b [i] == '1' && carry =='0') )
            ans+='1' ,carry ='0';
        else if(a[i] == '1' && b [i] == '1' && carry =='0' )
            ans+= '0' ,carry ='1';
        else if(a[i] == '1' && b [i] == '1' && carry =='1')
            ans+='1' ,carry='1';
        else if((a[i] == '1' && b [i] == '0' && carry =='1') || (a[i] == '0' && b [i] == '1' && carry =='1'))
            ans+='0' , carry ='1' ;
    }
    if(carry=='1')
        ans+='1';
    std::reverse(ans.begin(), ans.end());
    return ans;

}
};