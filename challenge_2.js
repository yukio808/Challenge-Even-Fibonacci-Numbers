exports.sumOfEvenFibonacciNumbers = function(n){
  var fib = [1,2,3,5,8,13,21,34,55,89];
//.map 

{  // [1,2,3,4,5,6,7,8,9,10]
   fib.map( function ( current ){
     return [i-2]+[i-1];
   });

  };

//.filter
  var even_fib = fib.filter( function ( current ){
    return current % 2 === 0;
  });
    console.log(even_fib);

//.reduce

  var sum_fib = even_fib.reduce( function ( previous , current ){
    return previous + current;
  });
    console.log('SUM TOTAL IS: ', sum_fib);
};