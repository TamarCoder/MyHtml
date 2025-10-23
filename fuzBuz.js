// FizzBuzz
// მოცემული გვაქვს number ცვლადი:

const n = 15;


// თქვენი დავალებაა შეამოწმოთ ცვლადში არსებული რიცხვი:

// თუ ის იყოფა 3-ზე, ეკრაზე გამოიტანეთ (დალოგეთ) Fizz
// თუ ის იყოფა 5-ზე, ეკრანზე გამოიტანეთ (დალოგეთ) Buzz
// თუ ის იყოფა 3-ზეც და 5-ზეც, მაშინ ეკრანზე გამოიტანეთ (დალოგეთ) FizzBuzz
// თუ ის არცერთზე იყოფა, დალოგეთ თვითონ რიცხვი.

 
// if (n  % 3 == 0 ){
//     console.log('Fizz');
// }else if (n % 5 == 0){
//     console.log('Buzz');
// } else if ((n  % 3 == 0 ) && (n % 5 == 0)){
//     console.log('FizzBuzz');
// }else{
//     console.log(n);
// }
 
 
if (n  % 3 == 0 ){
    console.log('Fizz');
}else if (n % 5 == 0){
    console.log('Buzz');
} else if ((n  % 3 == 0 ) && (n % 5 == 0)){
    console.log('FizzBuzz');
}else{
    console.log(n);
}
