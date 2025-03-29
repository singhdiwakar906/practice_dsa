class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next != null) { // Fix: Start from `this.head`
                current = current.next;
            }
            current.next = newNode;
        }
    }

    update(oldData, newData) { // Fix: Update old data to new data
        let current = this.head;
        while (current && current.data != oldData) {
            current = current.next;
        }
        if (current == null) {
            console.log("Data not found");
        } else {
            current.data = newData; // Fix: Update with new data
        }
    }

    delete(data){
        if (!this.head) return; // Fix: Handle empty list
        let current = this.head;
        if(current.data == data){
            this.head = this.head.next;
        }else{
            let prev = null;
            while(current && current.data != data){
                prev = current;
                current = current.next;
            }
            if(current == null){
                console.log("data not found");
            }else{
                prev.next = current.next
            }
        }
    }

    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }

}

// Example Usage
let list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.print(); // 10 -> 20 -> 30 -> null

list.update(20, 25);
list.print(); // 10 -> 25 -> 30 -> null

list.delete(25);
list.print(); // 10 -> 30 -> null