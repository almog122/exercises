'use strict';
const BSNode = require('./binary-search-tree.js')

const bSTree = new BSNode()
//insert nodes (same as in lesson)
const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]

letters.forEach(letter => {
    bSTree.insertNode(letter)
});

console.log(bSTree.findCommonParent("B", "I")) //should return "H"
console.log(bSTree.findCommonParent("B", "G")) //should return "E"
console.log(bSTree.findCommonParent("B", "L")) //should return "J"
console.log(bSTree.findCommonParent("L", "Y")) //should return "R"
console.log(bSTree.findCommonParent("E", "H")) //should return "J"