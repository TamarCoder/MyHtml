// 10 მარტივი რიცხვი
// თქვენი დავალებაა boolean ტიპის ინფორმაციით შეავსოთ შემდეგი ცვლადები:

 
// ეს მაგალითი არაფერში ჯდება გარდა ჩემი სურვილისა რომ 1 ფუნქცია გამოგაყენებინოთ ბევრგან

// მარტივი რიცხვი არის ბუნებრივი რიცხვი, რომელსაც მხოლოდ ორი გამყოფი აქვს: 1 და თავისი თავი. მაგალითად:
// 	2, 3, 5, 7, 11, 13, 17, 19, 23, 29 - ესენი მარტივი რიცხვებია.
// 	4, 6, 8, 9, 10, 12, 15, 20 - ესენი არ არის მარტივი, რადგან სხვა რიცხვებზეც იყოფა.

// დავალების ახსნა

// უნდა შევამოწმო მოცემული რიცხვები და Boolean მნიშვნელობით დააყენო:
// 	თუ რიცხვი მარტივია → true
// 	თუ არაა მარტივი → false

 const n = 7

function isPrime(n) {
    if (n <= 1)  {
        return false
    };  

    for (let i = 2; i < n; i++) { 
        if (n % i === 0) { 
            return false;  
        }
    }

    return true; 
}

console.log(isPrime(n));




// let is1Prime = isPrime(1);
// let is17Prime = isPrime(17);
// let is809Prime = isPrime(809);
// let is1027Prime = isPrime(1027);
// let is37Prime = isPrime(37);
// let is1453Prime = isPrime(1453);
// let is207Prime = isPrime(207);
// let is2207Prime = isPrime(2207);
// let is853Prime = isPrime(853);
// let is2205Prime = isPrime(2205);

// console.log(is1Prime);  // false
// console.log(is17Prime); // true
// console.log(is809Prime); // true
// console.log(is1027Prime); // false
// console.log(is37Prime); // true
// console.log(is1453Prime); // true
// console.log(is207Prime); // false
// console.log(is2207Prime); // true
// console.log(is853Prime); // true
// console.log(is2205Prime); // false
 