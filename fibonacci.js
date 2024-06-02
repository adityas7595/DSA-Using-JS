const fibonacci = (n) =>{
    if(n === 0) return [0];
    if( n === 1) return [1];
    let fib =  [0,1];
    for(let i=2; i<n; i++){
      fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
  }
  
  // O(n) 
  
  console.log(fibonacci(0));
  console.log(fibonacci(1));
  console.log(fibonacci(2));
  console.log(fibonacci(3));
  console.log(fibonacci(4));
  console.log(fibonacci(5));