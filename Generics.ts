

class Queue<T>{

    private data:T[] = [];

    add(item:T){
        this.data.push(item);
    }

    remove(){
        this.data.shift();
    }

}

const nameQueue = new Queue<string>();
nameQueue.add('CR');


const numbersQueue = new Queue<number>();
numbersQueue.add(7);
