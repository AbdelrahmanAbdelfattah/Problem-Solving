class MyStack {
public:
    queue<int>q;
    int peek =-1;
    MyStack() {
        
    }
    
    void push(int x) {
        peek =x;
        q.push(x);
    }
    
    int pop() {
        for( int i =0 ;i<q.size() -1 ;i++ )
        {
            int x= q.front();
            q.pop();
            q.push(x);
            peek =x;
        }
        int x= q.front();
        q.pop();
        return x;
    }
    
    int top() {
        return peek;
    }
    
    bool empty() {
        return q.size()==0;
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */