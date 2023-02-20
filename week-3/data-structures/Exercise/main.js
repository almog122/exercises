class UniqueArray {
  constructor() {
    this.uniqueArray = [];
    this.uniqueArrayLength = 0;
  }

  exists(item) {
    const arrayString = JSON.stringify(this.uniqueArray);
    const itemString = JSON.stringify(item);

    if (arrayString.includes(itemString)) {
      return true;
    }

    return false;
  }

  add(item) {

    const arrayString = JSON.stringify(this.uniqueArray);
    const itemString = JSON.stringify(item);

    if(arrayString.includes(itemString)) {
      return;
    }
    this.uniqueArray[this.uniqueArrayLength++] = item;
  }

  showAll() {
    for (let i = 0; i < this.uniqueArrayLength; i++) {
      console.log(this.uniqueArray[i]);
    }
  }

  get(index) {
    if (this.uniqueArray[index]) {
      return this.uniqueArray[index];
    }

    return -1;
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
console.log(uniqueStuff.exists("toy")); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"

console.log("{x:10, y:20}".includes("10"));
