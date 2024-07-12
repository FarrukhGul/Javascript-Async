/* Callback is a function that is passed to another function as an argument 
  This technique allows a functionto call another function
  A call back is run after another function has finished*/

  
 // Sequence of a function
 /* JS functions are excuted in a sequence the way its called not in a 
   sequence of defining  */
   //EXAMPLE

   function display(someText){
    document.getElementById('root').innerHTML = someText;
   }

   // Defining First Function 
   function firstFunction(){
      display('Hello');
   };
    // Defining Second Function 
   function secondFunction(){
    display('Farrukh');
 };

  // Function will be executed at the sequence of the sequence of CALL Like,
  firstFunction();
  secondFunction();
 

  // In the abover output will be  "Farrukh" Not "Hello"