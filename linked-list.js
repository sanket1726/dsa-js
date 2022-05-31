class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //  Insert First node
  insertAtFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //  Insert last node
  insertAtLast(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at index
  insertAtIndex(index, data) {
    // index of out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current = this.head;
    let previous;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  // get at index
  getAtIndex(index) {
    let count = 0;
    let current = this.head;
    while (current && count < index) {
      current = current.next;
      count++;
    }

    console.log(current);
  }

  // remove at index
  removeAtIndex(index) {
    let count = 0;
    let current = this.head,
      previous;

      if(index>this.size){
        console.log(`Invalid index '${index}'`)
        return;
      }

    if (!current) {
      console.log("LL is empty");
    } else {
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
      previous.next = current.next;
      this.size--
      console.log(`Item removed at index ${index}`)
    }
  }

  // clear list
clearList(){
  this.head=null;
  this.size=0;
  console.log('LL cleared')
}


  // print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertAtFirst(100);
ll.insertAtLast(200);
ll.insertAtLast(300);
ll.insertAtLast(400);
// ll.insertAtIndex(20, 500);
console.log("----------------");
// ll.removeAtIndex(3);
ll.printListData();
console.log("----------------");
console.log('Linked List size:',ll.size)
console.log("----------------");
ll.clearList()
ll.printListData();
console.log(ll);
