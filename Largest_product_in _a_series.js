var num1 = 600851475143;

var primes = []; 

for (var i = 2; i < Math.sqrt(num1); i++) {
  
  	var isPrime = true;
  
	for (var j = 0; j < primes.length; j++) {
      	if (i % primes[j] == 0) {
          isPrime = false;
          break;
        }
    }

  
  	if (isPrime == true) {
      primes.push(i);
    }

}

var big = 0;

for (var i = 0; i < primes.length; i++) {
   if (num1 % primes[i] == 0) {
     	big = primes[i];
   }
}

console.log(big);
