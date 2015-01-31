exports.sumOfEvenFibonacciNumbers = function(n){
  var fib = [1,2,3,5,8,13,21,34,55,89];


//.map 
// [1,2,3,4,5,6,7,8,9,10]
   
var addon_fib = fib.map( function ( current, i, array ){
     if (i <= n){
     return array[i-1]+ array[i];
   };
   });
console.log(addon_fib);


//.filter
  var even_fib = fib.filter( function ( current ){
    return current % 2 === 0 && current < n;
  });
    console.log(even_fib);

//.reduce

  var sum_fib = even_fib.reduce( function ( previous , current ){
    return previous + current;
  });
    console.log("SUM TOTAL IS: ", sum_fib);

};
var fib = [1,2,3,5,8,13,21,34,55,89];
var continue_fib = fib.map (function ( current, i, array ){
     if (i <= 4613732){
     return array[i-1]+ array[i];
   };
});
return sum_fib;