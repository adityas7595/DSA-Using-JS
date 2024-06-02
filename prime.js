const prime = (n) => {
    if(n < 2){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

// O(√n);
//Pairing factors: 2 * 18 = 36, 3 * 12 = 36, 4 * 9 = 36, 6 * 6 = 36.
//If there is no factor less than or equal to 6 (the square root), there won't be any factor larger than 6 either that multiplies to 36.
console.log(prime(3));
console.log(prime(4));
console.log(prime(5));
console.log(prime(29));
console.log(prime(30));
