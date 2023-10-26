let num = 7; // Change this number to test for different values
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + " is a prime number.");
} else 
    console.log(num + " is not a prime number.");
}