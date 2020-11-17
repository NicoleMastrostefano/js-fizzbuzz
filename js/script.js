var numbers = document.getElementById("numbers");
  // var num = new Array(100);
  for (var j = 1; j <= 100; j++) {

    if((j % 3 == 0) && (j % 5 == 0)) {
      i=  "FizzBuzz";
    } else if (j % 5 == 0) {
      i =  "Buzz";
    } else if (j % 3 == 0) {
      i =  "Fizz";
    } else {
      i =  j;
    }  numbers.innerHTML +=  (i+ '<br>');
  }
