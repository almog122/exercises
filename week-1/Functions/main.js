//Exercise 1

let isEven = function(num){
    if(num % 2 == 0){

        return true;

    } else{

        return false;
    }
}

console.log(isEven(6)) //true
console.log(isEven(7)) //false

//Exercise 2

let printOddNum = function(arr){

    for(let i in arr){
        if( !isEven(arr[i]) ){

            console.log(arr[i])
        }
    }
}

printOddNum(arr = [1,2,3,4,5]) //1,3,5

//Exercise 3

let isNumInArray = function(arr, num){

    for(let i in arr){

        if(arr[i] == num){
            return true
        }
    }

    return false
}

console.log(isNumInArray([1, 2, 3], 2)) //true
console.log(isNumInArray([1, 2, 3], 5)) //dalse

//Exercise 4

let calculator = {

    add:function(num1 , num2){

        return num1 + num2  
    },


    subtract: function(num1 , num2){
        
        return num1 - num2
    }

}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42