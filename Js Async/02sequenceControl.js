/* Some time we want a better controll like when a function should be executed
   Suppose you want like, Firstly it should do sum caalculations, 
   then it should display the result.
   
   you can call a function like myCalculator, save in another variable like result,
   then display the result*/

   function dipslayResult(someResult){
    let text = "Result: ";
    document.getElementById('root').innerHTML = text + someResult;
   }

   function myCalculator(num1, num2, sum){
    sum = num1 + num2;
    return sum;
   }

   // OTHER WAY

   /*
   function dipslayResult(someResult){
    let text = "Result: ";
    document.getElementById('root').innerHTML = text + someResult;
   }

   function myCalculator(num1, num2, sum){
    sum = num1 + num2;
    dipslayResult(sum);
   }

   myCalculator(2, 4);
   */