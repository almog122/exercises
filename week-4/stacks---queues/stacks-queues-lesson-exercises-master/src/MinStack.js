/* Write your class below */
class MinStack {
  constructor() {
    this.stack = [];
    this.length = 0;
    this.minValues = [];
  }

  print() {
    console.log(this.stack);
  }

  push(item) {
    this.stack[this.length] = item;
    this.length++;

    if (this.length == 1) {
      this.minValues.push(item);
    }
    if (item < this.minValues[this.minValues.length - 1]) {
      this.minValues.push(item);
    }
  }

  isEmpty() {
    return this.length === 0;
  }
  peek() {
    return this.isEmpty() ? null : this.stack[this.length - 1];
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.minValues[this.minValues.length - 1] == this.peek()) {
      this.minValues.pop();
    }
    
    this.length--;
    return delete this.stack[this.length];
  }

  getMin() {
    if (this.minValues.length == 0) {
      return null;
    }

    return this.minValues[this.minValues.length - 1];
  }
}

//You can paste the test code from the lesson below to test your solution
let ms = new MinStack();
ms.push(17);
ms.push(12);
ms.push(31);
console.log(ms.getMin()); //12
ms.pop();
ms.pop();
ms.pop();
console.log(ms.getMin()); //null
ms.push(19);
ms.push(21);
console.log(ms.getMin()); //19
ms.push(3);
console.log(ms.getMin()); //3
ms.pop();
ms.pop();
console.log(ms.getMin()); //19

/* Do not remove the exports below */
module.exports = MinStack;
