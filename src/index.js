module.exports = function getZerosCount(number, base) {
    let arrayOfPrimeNumbers = [];
    for(let i = 2; i <= base; i++) {
      if(base % i == 0) { 
        arrayOfPrimeNumbers.push(i);
        base = base / i;
        i--;    
      }
      else if(i == base) {
        arrayOfPrimeNumbers.push(i)
      }    
      else {
        continue
      }
    }
    let countOfZero = 0;
    for(let j = 0; j < arrayOfPrimeNumbers.length; j++) {
    let num =  arrayOfPrimeNumbers[j];
    let arrOFBigNumbers = arrayOfPrimeNumbers.filter(function(number) {
      return number == arrayOfPrimeNumbers[j];
    });  
    let count = 0;
    for( ;number / num > 1;) {
      count = count +  Math.floor(number / num);
      num = num * arrayOfPrimeNumbers[j]; 
  }
    if(countOfZero == 0) {
    countOfZero = Math.floor(count / arrOFBigNumbers.length);
    arrOFBigNumbers.length = 0;
    }
    else if(countOfZero > Math.floor(count / arrOFBigNumbers.length)) {
      countOfZero = Math.floor(count / arrOFBigNumbers.length);
      arrOFBigNumbers.length = 0;
    } 
  }
return countOfZero
}