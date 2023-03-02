/* Write your class below */
const Queue = require("./Queue");

class DuoQueue {
  constructor() {
    this.firstQueue = new Queue();
    this.secondQueue = new Queue();
  }

  enqueue(person, qNum) {
    if (qNum == 1) {
      this.firstQueue.enqueue(person);
    } else {
      this.secondQueue.enqueue(person);
    }
  }

  dequeue(qNum) {
    if (qNum == 1) {
      if (this.firstQueue.isEmpty()) {
        return null;
      }

      return this.firstQueue.dequeue();
    } else {
      if (this.secondQueue.isEmpty()) {
        return null;
      }

      return this.secondQueue.dequeue();
    }
  }

  getLongestQueue() {
    if (this.firstQueue.length > this.secondQueue.length) {
      return this.firstQueue;
    }

    return this.secondQueue;
  }

  getShortestQueue() {
    if (this.firstQueue.length < this.secondQueue.length) {
      return this.firstQueue;
    }

    return this.secondQueue;
  }

  balanceQueues() {
    let differenceQueueLength = Math.abs(this.firstQueue.length - this.secondQueue.length)
    while(differenceQueueLength >= 2) {
        this.getShortestQueue().enqueue(this.getLongestQueue().dequeue())
        differenceQueueLength = Math.abs(this.firstQueue.length - this.secondQueue.length)
    }
  }
}

//You can paste the test code from the lesson below to test your solution
let dq = new DuoQueue();

//first set
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(2, 2);
dq.enqueue(2, 2);
dq.dequeue(1);
dq.dequeue(1);

console.log(dq.getLongestQueue()); //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()); //Queue { queue: [ 1 ] }

//second set
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);
dq.enqueue(1, 1);

console.log(dq.getLongestQueue()); //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()); //Queue { queue: [ 2, 2 ] }

//balance queues
dq.balanceQueues();
console.log(dq.getLongestQueue()); //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()); //Queue { queue: [ 1, 1, 2, 2 ] }

/* Do not remove the exports below */
module.exports = DuoQueue;
