function func1(name, callback) {
   setTimeout(function() {
      // operations
   }, 500);
}
function func2(name, callback) {
   setTimeout(function() {
      // operations
   }, 100);
}
function func3(name, callback) {
   setTimeout(function() {
      // operations
   }, 900);
}
function func4(name, callback) {
   setTimeout(function() {
      // operations
   }, 3000);
}

func1("input1", function(err, result1){
   if(err){
      // error operations
   }
   else {
      //some operations
      func2("input2", function(err, result2){
         if(err){
            //error operations
         }
         else{
            //some operations
            func3("input3", function(err, result3){
               if(err){
                  //error operations
               }
               else{
                  // some operations
                  func4("input 4", function(err, result4){
                     if(err){
                        // error operations
                     }
                     else {
                        // some operations
                     }
                  });
               }
            });
         }
      });
   }
});
