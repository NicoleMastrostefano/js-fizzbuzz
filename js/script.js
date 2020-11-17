

//  // Scrivi un programma che stampi i numeri da 1 a 100

//     if ((i % 3 == 0) && (i % 5 == 0)) {
//     console.log("fizz buzz");
//     }
//     else if ( i % 3 == 0 ) {
//     console.log("Fizz");
//
//     } else if( i % 5 == 0 ) {
//     console.log("Buzz");


// prove
// var numbers = new Array(100);
//     for (var i = 0; i <= 100; i++) {
//         numbers[i] = i + 1;
//         document.write(numbers[i] + '<br>');
//     }
//


var numbers = document.getElementById("numbers");
  // var num = new Array(100);
  for (var i = 1; i < 101; i++) {

    if((i % 3 == 0) && (i % 5 == 0)) {
      j =  "FizzBuzz";
    } else if (i % 5 == 0) {
      j =  "Buzz";
    } else if (i % 3 == 0) {
      j =  "Fizz";
    } else {
      j =  i;
    }  numbers.innerHTML +=  (j+ '<br>');
  }
