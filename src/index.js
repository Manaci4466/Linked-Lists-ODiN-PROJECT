class LinkedList {
/* EXAMPLE list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {

                }
            }
        }
    } */
    #size = 0;
    #tail;
    #head;
    constructor(head = null){
        this.#head = new linkedNode(head,null);
        this.#tail = this.#head;
        this.#size++;
    }

    get head(){
        return this.#head;
    }
    get tail(){
        return this.#tail;
    }
    get size(){
        return this.#size;
    }
    

     append(value){
        this.#size++;
        if(this.#head === null)return this.prepend(value);
        else{
            let tmp = this.#head;
            while(tmp.next != null)tmp = tmp.next
                tmp.next = new linkedNode(value,null);
                this.#tail = tmp.next;
        }
        return value;
    }

    prepend(value){
        this.#head = new linkedNode(value,this.#head);
        this.#size++;
        return value;
    }

    pop(){
        let tmp = this.#head;
        let rtrn;
        if(tmp.next === null){rtrn = tmp; this.#head = tmp.next; this.#tail = tmp; this.#size--;return rtrn;}
        if(tmp.next.next === null){rtrn = tmp.next; tmp.next = tmp.next.next; this.#tail = tmp; this.#size--; return rtrn;}
            while(tmp.next.next != null) tmp = tmp.next;
            this.#size--;
            rtrn = tmp.next;
            tmp.next = tmp.next.next;
            this.#tail = tmp;   
            return rtrn;   
    }

    at(index){
        let count = 0;
        let tmp = this.#head;
        while(count < index){
            count++;
            tmp = tmp.next;
        }
        return tmp;
    }

    contains(value){
        let tmp = this.#head;
        for(let i = 0; i < this.#size; i++){
            if(tmp.value == value){
                return true;
            }
            tmp = tmp.next;
        }
        return false;
    }
    find(value){
        let tmp = this.#head;
        let count = 0;
        for(let i = 0; i < this.#size; i++){
            count++;
            if(tmp.value == value){
                return count;
            }
            tmp = tmp.next;
        }
        return tmp;
    }

    toString(){
        let tmp = this.#head;
        let string = '';
        for(let i = 0; i < this.#size + 1; i++){
            string +=  tmp === 'null' ? `(${tmp})` : `(${tmp.value}) ==> `;
            tmp = tmp.next ===  null ? 'null' : tmp.next;
        }
        return string;
    }

    insertAt(index,value){
        if(index === 0){this.prepend(value); return;}
        if(index > this.#size - 1)throw new RangeError();
        let count = 0;
        let tmp = this.#head;
        let prev;
        let current;
        while(count < index){
            count++;
            prev = tmp;
            current = tmp.next;
        }
        prev.next = new linkedNode(value,current);
        this.#size++;
        return prev.next;
    }

    removeAt(index){
        if(index > this.#size - 1)throw new RangeError();
        let count = 0;
        let tmp = this.#head;
        let current;
        let rtrn;
        while(count < index){
            count++;
            current = tmp.next;
            rtrn = tmp.next;
            console.log('working')
        }

        tmp.next = current.next;
        this.#size--;
        return rtrn;
    }

}

class linkedNode {
    
    constructor(value,next){
        this.value = value;
        this.next = next;
        
    }
}

const list = new LinkedList('head')
list.prepend('shit1');
list.prepend('shit');
list.prepend('shit');
list.pop();
list.pop();
list.insertAt(0,"hallo")
list.append('hallo');
list.append('why');
list.append('huh');
list.append('hi');

console.log(list.head);
console.log(list.size);
console.log(list.toString());
console.log(list.contains('hi'),list.find('shit'))

