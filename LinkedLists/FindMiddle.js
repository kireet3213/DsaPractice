function findMiddle(head){
//take two pointers. one moves 1 node at a time while other moves double of that.
// at the time second pointer becomes null first one would be at middle 


    let slow= head;
    let fast= head;
while(fast !== null && fast.next !== null){
    slow= slow.next;
    fast= fast.next;
}
return slow;

}

findMiddle(PassHeadNode)