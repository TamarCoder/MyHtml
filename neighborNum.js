
const array = [1,3,7,5];
const size = 2;

// იპოვეთ size რაოდენობის მეზობელი რიცხვების უდიდესი ჯამი.
//ამ მაგალითში უნდა გავიგოთ ყველა 2 მეზობელი რიცხვის ჯამი.
//შექმენით ფუნქცია რომელსაც პორტალი გამოიძახებს და ჩამოგაწვდით array-ს და num-ს:

// function sum(array, size) {
//     let maxSum = - Infinity;
//     for(let i = 0; i <= array.length - size;  i++){
//         let currentSum = 0;
//         for(let j = 0; j < size; j ++){
//             currentSum += array[i + j];
//         }
//         if(currentSum > maxSum){
//            maxSum =  currentSum
//         }
//     }
//     return maxSum
// }

// console.log(sum(array, size));

  ///  რა არის ამ დავალებაში ჩემი ინფუთი ??
          // ინფუთი არის nubers -  მასივის ინფორმაცია.
          // size  - თუ რამდენი რიცხვის ჯამი უნდა მოხდეს. 
    /// რა უნდა იყოს ჩემი აუთფუთი ?
          // ჩემი აუთფუთი არის  მეზობელი რიცხვების ჯამი , მაგ : 1 + 3 = 4 // 3 + 7 = 10 //  7 + 5 = 1
          // საბოლოდ  ფუნქციამ უნდა დამიბრუნოს მაქსიმალური რიცხვი. 





let maxSum = 0;
let arrayNumbers = {}
let arraySize = {}

function  sum (array, size){
    for(let i  = 0 ; i < array.length;  i ++){
        if(arrayNumbers[`${array[i]}`]){

        }
    }

}

 