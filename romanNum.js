// თქვენი მოვალეობაა შექმნათ ფუნქცია  
//  რომელიც არგუმენტად მიიღებს რომაულ რიცხვს სტრინგის სახით და უკან დააბრუნებს ლათინურ რიცხვს.

// მაგალითები:

const romantext = {          
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
 
  
  function romanToInt(string) {
    let sum = 0;  // აქ უნდა შევინახო ჯამი მაგ : VI  =  5 + 1 =  6; 
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "I" && string[i + 1] === "V") {
        sum += 4;
        i++;
      } else if (string[i] === "I" && string[i + 1] === "X") {
        sum += 9;
        i++;
      } else if (string[i] === "X" && string[i + 1] === "L") {
        sum += 40;
        i++;
      } else if (string[i] === "X" && string[i + 1] === "C") {
        sum += 90;
        i++;
      } else if (string[i] === "C" && string[i + 1] === "D") {
        sum += 400;
        i++;
      } else if (string[i] === "C" && string[i + 1] === "M") {
        sum += 900;
        i++;
      } else {
        sum += romantext[string[i]];
      }
    }
    return sum;
  }

  console.log(romanToInt("III"))
  