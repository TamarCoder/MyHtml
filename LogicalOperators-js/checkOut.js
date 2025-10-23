// Checkout
// შენ ხარ ონლაინ შოპის დეველოპერი. შენი დავალებაა შეამოწმო შეუძლია თუ არა მომხარებელს კონკრეტული კალათის შეძენა.
// მოცემული გვაქვს ცვლადები:

// const productPrice = 5.5;
// const stock = 50; // რამდენი ერთეულია ხელმისაწვდომი მაღაზიაში

// const quantity = 12; // რამდენი ერთეულის შეძენა სურს მომხმარებელს
// const balance = 32.7;

// console.log(balance);
// console.log(stock);


// მომხმარებელს შეუძლია კალათის შეძენა თუ:

// აქვს საკმარისი თანხა ანგარიშზე
// არის საკმარისი რაოდენობის პროდუქტი ხელმისაწვდომი მაღაზიაში


// გამოთვალეთ შედეგი და ჩაწერეთ boolean ცვლადში:

// let canBuy = !(balance || stock)
// console.log(canBuy);


const productPrice = 5.5;
const stock = 50;
const quantity = 12; 
const balance = 66;

let canBuy = (balance >= quantity * productPrice) && (stock >= quantity);
// let canBuy = (66 >= 12 * 5.5) && (50 >= 12);
// let canBuy = (66 >= 66) && (true);
// let canBuy = (true) && (true);
// let canBuy = true;
console.log(canBuy); 