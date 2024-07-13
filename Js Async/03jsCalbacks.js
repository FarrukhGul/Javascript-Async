// JS callback is a function that is passed to anothe rfuction as an argumment

/* Two ways to call the Callback functions

 1 => Synchronous: Synchrounous callbacks are called immediately when the outer function
  is invoked
  
 2=> Asynchronous: Asynchronous callbacks are called some later after the an Asynchronous operation
  has complete */

  // 1) Synchronous Callback example

   console.log("Callback are calling Syncrounously....");
  // Synchronous function with a callback
  function synchronousOpertaion(callback){
  console.log("Starting Synchronous Operation...");
  callback(); // invoke the callback immediatley
  console.log("Synchronous Opeartion Started...");
  }

  // Define a callback Function
  function SynchronousCallback(){
  console.log("Callback Executed Synchronously");
  }

  // Calling the Function With the Synchronous callback
  synchronousOpertaion(SynchronousCallback);

  /* OUTPUT will b like this
  Starting Synchronous Operation...
  Callback Executed Synchronously
  Synchronous Opeartion Completed...

  1) Defined a function namely synchronousOperation.
  2) It takes a callback as an argument.
  3) Inside the "synchronousOperation function", callback() will immediatley invoked,
     when outer function means Your "synchronousOperation function" will executed or logged.
  4) The callback function "synchronousCallback" that is defined separately simply logs
     "Callback executed synchronously".
  */



     console.log("");
     console.log("");
     console.log("");
     console.log("");
     console.log("");
   
     console.log("Callback are calling Asyncrounously....");
  // 2) Asynchronous Callback example

  function asynchronousOpaertaion(callback){

  console.log("Starting Asynchronous Operation...");
  setTimeout(function() {
    callback();
  }, 5000 ) //5s

  console.log("Asynchronous Opeartion Started...");
  }

  function asynchronousCallback(){
    console.log("Callback Executed Asyncronously...");
  }

  asynchronousOpaertaion(asynchronousCallback);

    /* OUTPUT will be like this
  Starting Synchronous Operation...
  Callback Executed Synchronously
  ****** Wait for 5s then it will be completed
  Synchronous Opeartion Completed...

  1) Defined a function namely AsynchronousOperation.
  2) It takes a callback as an argument.
  3) Inside the "AsynchronousOperation function", callback() will will not immediatley invoked due
  to setTimeout(),
     because the difference is In the asynchronous example, the callback (asynchronousCallback) 
     is invoked after a delay (simulated by setTimeout), allowing other code (like "Asynchronous operation 
     started.") to execute in the meantime.".
  */

     // Another example
   console.log("");
   console.log("");
   console.log("");
   console.log("");
     function display(text){
        return text;
       }
   
       function text(callback){
           console.log("Fetching Data is starting.....");
           setTimeout(function() {
               callback();
           }, 3000);
           console.log("Data Fetching has started just wait....");
       };
   
       function fetchData(){
           console.log("Here is your data... => ", display("i love you"));
       }
       text(fetchData);