//2. Write a program to check given no. is prime or not?

// Defining The Function
function IsPrimeNumber(num) {
    if (num == 2) {
      return true;
    }
  
    if (num % 2 == 0) {
      return false;
    }
  
    let num1 = Math.ceil(num / 2);
    
    while (num1 > 1) {
      if (num % num1 == 0) {
        return false;
      } else {
        num1--;
      }
    }
    return true;
  }
  
  let number = 11;
  
  let data = IsPrimeNumber(number);
  
  if(data){
    console.log("The Number Is Prime")
  }else{
    console.log("The Number Is Not Prime")
  }