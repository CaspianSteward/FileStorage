var  final = document.getElementById("fizzdiv");
var by3 = " Fizz";
var by5 = " Buzz";
var by35 = ' FizzBuzz';
var final= [];

const fizzbizz = [];
for (let i=1; i<=100; i++){
   fizzbizz.push(i)
      if(i % 3 == 0 && i % 5 == 0){final.push(by35)}
      else if (i % 3 == 0){final.push(by3)}
      else if (i % 5 == 0){final.push(by5)}
      else {final.push(" " + i)};
}
fizzdiv.innerHTML = (final);