const splice = function (arr, indexNum, removeAmount, ...items) {
  let deletedArr = [];
  let lengthArr = arr.length;

  removeAmount = removeAmount == undefined ?  arr.length - indexNum : removeAmount

  for (let i = 0; i < lengthArr + deletedArr.length + indexNum; i++) {
    if (i == indexNum) {

      while (removeAmount > 0) {
        deletedArr.push(arr.shift());
        removeAmount--;
      }

      for (let j in items) {
        arr.push(items[j]);
      }
    }

    arr.push(arr.shift());
  }

  return deletedArr;
};

// remove 1 element
let arr = [1, 2, 3];
splice(arr, 0, 1);
console.log(arr); //should be [2,3]

// add 1 element
arr = [1, 2, 3];
splice(arr, 0, 0, 0);
console.log(arr); //should be [0,1,2,3]

// add 2 elements
arr = [1, 2, 3];
splice(arr, 0, 0, -1, 0);
console.log(arr); //should be [-1,0,1,2,3]

// replace 1 element
arr = [1, 2, 3];
splice(arr, 1, 1, 55);
console.log(arr); //should be [1,55,3]

// delete all elements from index to end
arr = [1, 2, 3, 4, 5];
splice(arr, 1);
console.log(arr); //should be [1]

// returns array of deleted elements
arr = [1, 2, 3];
let deleted = splice(arr, 1);
console.log(deleted); //should be [2,3]

// returns an array of the deleted element (1 element)
arr = [1, 2, 3];
deleted = splice(arr, 1, 1);
console.log(deleted); //should be [2]

// returns an empty array when no elements are deleted
arr = [1, 2, 3];
deleted = splice(arr, 1, 0, 5);
console.log(deleted); //should be []
