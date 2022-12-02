/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) 
    {
        if(head==nullptr) return head;
        while(head!=nullptr && head->val==val)
        {
            head = head->next;
        }
        if(head)  
        {
             ListNode *first =new ListNode , *socend = new ListNode;
        first =head , socend =head->next;
        while(socend)
        {
            if(socend->val == val )
            {
                first->next = socend->next ;
                socend= socend->next;
        
            }
            else
            {
                first =first->next;
                socend =socend->next;
            }
        }
        return head;
        }
       return head;
    }
};