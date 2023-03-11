'use strict';
class BSNode {
    
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }

    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findNode(value){
        if (this.value == value) {
            return true
        }

        if (value > this.value && this.rightChild) {
            return this.rightChild.findNode(value)
        }
        else if(value <= this.value && this.leftChild) {
            return this.leftChild.findNode(value)
        }

        return false
    }

    findCommonParent(value1 , value2){

        let isValueLeft = this.leftChild?.findCommonParent(value1 , value2)
        let isVlueRight = this.rightChild?.findCommonParent(value1 , value2)

        if(this.value == value1 || this.value == value2 ){
            return true
        }

        if(isValueLeft && isVlueRight){
            
            return this.value
        }else{

            return false || isValueLeft || isVlueRight
        }
        
    }

    removeNode(value , parent){
        if (this.value == value) {
            if(this.leftChild || this.rightChild){
                
            }
            return this
        }

        if (value > this.value && this.rightChild) {
            return this.rightChild.removeNode(value , parent)
        }
        else if(value <= this.value && this.leftChild) {
            return this.leftChild.removeNode(value , parent)
        }
    }
}

module.exports = BSNode
