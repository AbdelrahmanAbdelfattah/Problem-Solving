class Solution {
public:
int arr [35];

int fib(int n)
{
    if(arr[n])
        return arr[n];
    if(n==0)
        return 0;
    if(n==1)
        return 1;
    return arr[n] =fib(n-1)+fib(n-2);
}

};