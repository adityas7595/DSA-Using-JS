const isPowerOfTwo = (n) => {
    if(n < 1){
        return false;
    }
    while(n > 1){
        if(n%2 != 0){
            return false;
        }
        n = n/2;
    }
    return true;
}

//O(log n);

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(16));