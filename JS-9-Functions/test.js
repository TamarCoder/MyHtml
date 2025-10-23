// const numbers = [3, 6, 9, 12, 15, 18, 21, 24];
// function getEvenNumbers(arr) {
//     let result = []; // ლუწი რიცხვების შესანახი მასივი
//     for (let i = 0; i < arr.length; i++) { 
//         if (arr[i] % 2 === 0) {   
//             result.push(arr[i]);  
//         }
//     }
//     return result;  
// }
// console.log(getEvenNumbers(numbers));  

// const numbersMaX = [45, 67, 89, 12, 56, 99, 23];
// function findMax(arr) {
//     let maxNumber = []
//     for(let i = 0; i < arr.length; i ++){
//          if(arr[i] > maxNumber){
//             maxNumber = arr[i]
//          }

//     }
//     return maxNumber
// }
// console.log(findMax(numbersMaX));  


// const numbersSum = [10, 20, 30, 40];
// function sumArray(arr) {
    
//     let sum = 0; 

//     for(let i = 0; i < arr.length; i ++){
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(sumArray(numbersSum));  

// const numbersUnic = [1, 2, 2, 3, 4, 4, 5];
// function getUniqueValues(arr) {
//     let unicNumbers = []
//     for (let i  = 0; i < arr.length; i ++){
//         if (!unicNumbers.includes(arr[i])) {
//             unicNumbers.push(arr[i]);
//         }
//     }
//     return unicNumbers
// }
// console.log(getUniqueValues(numbersUnic));  

// const fruits = ["apple", "banana", "orange", "mango"];
// function checkFruit(arr, fruit) {
//     for(let i = 0; i < arr.length; i ++){
//           if(arr[i] === fruit){
//             return true
//           }
//     }
//     return false
// }

// console.log(checkFruit(fruits, "banana"));  
 


// // const students = [
// //     { name: "Ana", grades: [85, 90, 78] },
// //     { name: "Luka", grades: [70, 80, 75] },
// //     { name: "Mariam", grades: [92, 88, 95] }
// // ];



// function calculateAverage(grades) {
//     const sum = grades.reduce((total, grade) => total + grade, 0);
//     return sum / grades.length; 
// }
 
// function calculateGrade(average) {
//     if(average >  90){
//         return 'A'
//     }else if(average > 80){
//         return 'B'
//     }else if(average > 70){
//         return 'C'
//     }else if(average >  60){
//         return 'D'
//     }else {
//         return 'F'
//     }
     
// }
// function printStudentAverages(students) {
//     students.forEach(student => {
//         const average = calculateAverage(student.grades);
//         console.log(`${student.name}-ის საშუალო ქულაა: ${average} შეფასება: ${calculateGrade(average)}`);
//     });
// }

// printStudentAverages(students);

// // ანუ მოცმეული მაქვს სტუდენტების ობიექტი სადაც შეტანილია  თითოეული სტუდენტის სახელი და მათი ქულები მასივის სახით. 
// // calculateAverage -  ფუნქცია ითვლის სტუდენტების ქულების საერთო ჯამს. ფუნქციას ზუსტად ამიტომ აგდაეცემა grade  რათა ზუსტად ეს ინფორმაცია დააჯამოს. 
// // printStudentAverages -  ფუნქცია  აკეთებს იმას რომ გამოაქსვ  სტუდენტის სახელი  და მისი საშუალო ქულა


// const cart = [
//     { name: "Laptop", price: 1200 },
//     { name: "Mouse", price: 50 },
//     { name: "Keyboard", price: 100 }
// ];

// let updateCart = [...cart, { name: "Headphones", price: 150 }, {name: "SSD", price:100}];  

// function addProduct(cart, product) {
//     return [...cart, product];  
// }

// function removeProduct(cart, productName) {
//     return cart.filter(product => product.name !== productName); 
// }

// function calculateTotal(cart) {
//     return cart.reduce((total, product) => total + product.price, 0);
// }

// // პროდუქტის დამატება
// updateCart = addProduct(updateCart, { name: "Monitor", price: 300 });   

// // პროდუქტის წაშლა
// updateCart = removeProduct(updateCart, "Mouse");   

// console.log("საბოლოო კალათა:", updateCart);
// console.log("ჯამური ფასი:", calculateTotal(updateCart));


 
// // 	შექმენი მასივი (array), რომელიც შეიცავს სტუდენტების მონაცემებს (სახელი და ქულები, 
// //       მაგალითად {name: "ლევანი", scores: [90, 85, 78]}).
// // 	დაწერე ფუნქცია, რომელიც დააბრუნებს სტუდენტს, რომელსაც აქვს საშუალო ქულა ყველაზე მაღალი.
// // 	გამოიყენე map, reduce და sort ჩაშენებული მეთოდები.

// const students = [
//     {
//         id: 1,
//         firstName: 'გიგო',
//         lastName: 'მენაბდე',
//         allScores: [10, 3, 3, 4, 1, 0, 5, 6]
//     },
//     {
//         id: 2,
//         firstName: 'გოგი',
//         lastName: 'ჩანტლაძე',
//         allScores: [0, 1, 1, 11, 10]
//     },
//     {
//         id: 3,
//         firstName: 'ნინო',
//         lastName: 'მაისურაძე',
//         allScores: [3, 1, 9]
//     },
//     {
//         id: 4,
//         firstName: 'ლუკა',
//         lastName: 'რამაზაშვილი',
//         allScores: [10, 10, 18, 10, 5, 6, 3, 10, 3, 10, 3, 10, 5, 15, 7, 5]
//     },
//     {
//         id: 5,
//         firstName: 'მარიამ',
//         lastName: 'მარტყოფელი',
//         allScores: [10, 10, 15, 5, 6, 3, 3, 10, 3, 7, 5]
//     }
// ]
// // // 	დაწერე ფუნქცია, რომელიც დააბრუნებს სტუდენტს, რომელსაც აქვს საშუალო ქულა ყველაზე მაღალი.
// // // 	გამოიყენე map, reduce და sort ჩაშენებული მეთოდები.
 
// function studentAverage() {
//     let studentScores = students.map(student => ({
//         firstName: student.firstName,
//         totalScore: student.allScores.reduce((sum, score) => sum + score, 0)
//     }));
//     studentScores.sort((a, b) => b.totalScore - a.totalScore);

//     console.log(studentScores);
// }

// studentAverage();
// მოცემულია სტუდენტების მასივი, სადაც თითოეულს აქვს ქულები (scores). 
// უნდა დაწერო ფუნქცია, რომელიც დააბრუნებს თითოეული სტუდენტის სახელსა და მის საშუალო ქულას.
// const students2 = [
//     { name: "ლევანი", scores: [80, 90, 100] },
//     { name: "ანა", scores: [75, 95, 85] },
//     { name: "გიორგი", scores: [60, 70, 80] }
//   ];
  
 

// function studensAverage() {
//     let studentScores = students2.map(student => {
//         let totalScore = student.scores.reduce((sum, score) => sum + score, 0);
//         let scoreAverage = totalScore / student.scores.length;

//         return {
//             firstName: student.name,
//             average: scoreAverage
//         };
//     })
    

//     console.log(studentScores);
    
// }
// studensAverage()

// გაქვს პროდუქტების მასივი. უნდა დაალაგო ის price-ის მიხედვით კლებადობით (sort()).
// const products2 = [
//     { name: "ლეპტოპი", price: 1500 },
//     { name: "ტელეფონი", price: 700 },
//     { name: "ყურსასმენები", price: 200 },
//     { name: "მაუსი", price: 50 }
//   ];
  

//   function productsLists () {
//        let product =  products2.sort((a, b) =>  b.price - a.price)
//        let mappedProducts = product.map(product => product.price);
//        console.log(mappedProducts);
       
//   }
//   productsLists()

//  მასივიდან ამოიღე მხოლოდ პროდუქტის სახელები და დააბრუნე ახალი მასივი.
// მაგალითი:

// const products = [
//     { name: "ლეპტოპი", price: 1500 },
//     { name: "ტელეფონი", price: 700 },
//     { name: "ყურსასმენები", price: 200 },
//     { name: "მაუსი", price: 50 }
// ];

// function productNames() {
//     let string =  products.map(product => product.name)
//     console.log(string);
    
// }
// productNames()

// გამოიყენე reduce(), რომ გაიგო, პროდუქტების ჯამური ფასი.
// მაგალითი

// ამ მასივიდან უნდა გამოიანგარიშო ჯამი
// const products = [
//     { name: "ლეპტოპი", price: 1500 },
//     { name: "ტელეფონი", price: 700 },
//     { name: "ყურსასმენები", price: 200 },
//     { name: "მაუსი", price: 50 }
// ];

// function productSum () {
//     let productMap =  products.map(product => product.price); 
//     let productsum =  productMap.reduce((sum, prices) =>  sum + prices, 0);

//     console.log(productsum);
    

// }
// productSum()


// დაწერე ფუნქცია, რომელიც:
// 	 დააბრუნებს ყველა ქალაქს კონკრეტული ქვეყნიდან
// 	 გამოითვლის ქვეყნის საერთო მოსახლეობას

// const countries = [
//     {
//         name: "საქართველო",
//         cities: [
//             { name: "თბილისი", population: 1200000 },
//             { name: "ბათუმი", population: 200000 }
//         ]
//     },
//     {
//         name: "გერმანია",
//         cities: [
//             { name: "ბერლინი", population: 3600000 },
//             { name: "მიუნხენი", population: 1500000 }
//         ]
//     }
// ];

// // ჩემი გეგმა დავწერო ფუნქცია სახელად PeopleSum() -   
// // 1. ეტაპზე დავმაპავ სათითაოდ ქალაქებს თავისი მოსახლეობით. 
// // 2.  reduce() გამოყენებით დავაჯამები მოსახლეობის რაოდენობას , 
// // 3. forEach- ით  დავლოგავ უკვე  დაჯამებულ  რაოდენობას ,  ქვეყნის მიხედვით.  

// function PeopleSum () {
//     let countryPopulations =  countries.map (cocuntry => {
//          let totapPopulationSum =  cocuntry.cities.reduce((total, city) => total + city.population, 0); 
//           return {name: cocuntry.name, population: totapPopulationSum}
          
//     })
     
//     console.log(countryPopulations);
    
    
// }

// PeopleSum()
 