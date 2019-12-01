console.log("connected");

//write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise
// function isEven(num) {
//     //return true if even
//     if(num % 2 === 0) {
//         return true;
//     }
//     //return false otherwise
//     else {
//         return false;
//     }
// }

//refactored version
function isEven(num) {
    return num % 2 === 0;
}



//write a function factorial() which takes a single numeric argument and returns the factorial of that number
function factorial(num) {
    //define a result varialbe
    var result = 1;
    //calculate factoral and store value in result
    for(var i = 2; i <= num; i++) {
        result *= i      
    }
    //return the result variable
    return result;
}
//factorial(4) 4 x 3 x 2 x 1

//working backwards version
// function factorial(num) {
//     //so factorial(0) returns 1
//     if(num === 0) {
//         return 1;
//     }
//     //define a result varialbe
//     var result = num;
//     //calculate factoral and store value in result
//     for(var i = num-1; i >= 1; i--) {
//         result *= i      
//     }
//     //return the result variable
//     return result;
// }



//write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version
function kebabToSnake(str) {
    //replace all dashes with underscores
    var newStr = str.replace(/-/g , "_");
    //return str
    return newStr;
}