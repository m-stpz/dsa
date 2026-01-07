/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

prev: last item
temp: save chain
curr: walk the list

1 - 2 - 3 - 4 - 5
                c   
                t
        p

````
current = head
prev = null

while(current.next){
    temp = current.next
    current.next = prev
    prev = current
    current = temp
}

current.next = prev

return current
```

1 <- 2 <- 3 <- 4 <- 5
                    c.next
                    t
                p

c = 4
c.next = 5
t = 5.next 
p = 3

until c.next not null
    t = c.next
    c.next = p
    p = c 
    c = t 
*/

var reverseList = function (head) {};
