'use strict';
const BSNode = require('./binary-search-tree.js')

const bSTree = new BSNode()
//insert nodes (same as in lesson)
const letters = ["H", "E", "S", "G", "L", "Y", "I"]

letters.forEach(letter => {
    bSTree.insertNode(letter)
});
    
//Use the following to test
console.log(bSTree.findNode("H")) // should print true
console.log(bSTree.findNode("G")) // should print true
console.log(bSTree.findNode("Z")) // should print false
console.log(bSTree.findNode("F")) // should print false
console.log(bSTree.findNode("y")) // should print false - we didn't make the tree case sensitive!