
const myObject = {
    arr: [11,13,14,66,67,69,234,456,2,1],

    *[Symbol.iterator]() {
        for(let i = 0; i < this.arr.length; i++){

            if(this.arr[i] % 2 == 0){
                yield this.arr[i];
            }
        }
    }
}

for (let x of myObject) {
    console.log(x)
}