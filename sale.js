// ფასდაკლებების სისტემა
// ვებსაიტზე გვაქვს რამდენიმე ტიპის ფასდაკლება, ისინი ასახულია რამდენიმე ცვლადში:

const adminSale = 20; // რამდენ პროცენტიანი ფასდაკლება ეკუთვნის ადმინისტრატორს
const frequentClientSale = 15; // რამდენ პროცენტიანი ფასდაკლება ეკუთვნის ვებსაიტის ხშირ კლიენტს
const studentSale = 10; // რამდენ პროცენტიანი ფასდაკლება ეკუთვნის სტუდენტს
// მომხმარებელს სურს პროდუქციის შეძენა, ამ პროცესის ასასახად გვაქვს შემდეგი ცვლადები:

const userBalance = 10;
const cartTotal = 15;

const userIsAdmin = true;   
const userIsFrequentClient = false;  
const userIsStudent = false;  
let paymentComplete ;

let discauntAccount;  // გამოვთვალო რამდენია ფასდაკლება 
let finalPrice ;  // გავიგო რა იქნება საბოლო ფასი 
 
 
// if (userIsAdmin) {
//     discauntAccount = cartTotal * (adminSale / 100);
// } else if (userIsFrequentClient) {
//     discauntAccount = cartTotal * (frequentClientSale / 100);
// } else if (userIsStudent) {
//     discauntAccount = cartTotal * (studentSale / 100);
// }
// finalPrice = cartTotal - discauntAccount;
// paymentComplete = userBalance >= finalPrice;
// console.log(paymentComplete);


// გამოთვალეთ წარმატებით შეძლო თუ არა პროდუქტის შეძენა მომხმარებელმა.

// შედეგი ჩაწერეთ boolean ცვლადში://
//  P.S. შეგიძლიათ ივარაუდოთ, რომ ადმინისტრატორს ყოველთვის ყველაზე დიდი ფასდაკლება ექნება ხოლო სტუდენტს ყველაზე პატარა.


 
// თუ იუზერი არის ადმინი მას ეკუთვნის 20% ფასდაკლება ,  
// ეს პროცენტი უნდა გამოვაკლო cartTotal -ს და შევადარო მეტია თუ არა userBalance -ზე 
// ხოლო მიღებული შედეგი შევიტანო ბულიან ცვლადში

  
let sale = 0

if (userIsAdmin) {
    sale = adminSale
}else if (userIsFrequentClient) {
    sale = frequentClientSale
}else if (userIsStudent) {
    sale = studentSale
}
let discounted = cartTotal / 100 * (100 - sale)

paymentComplete = userBalance >= discounted

console.log(paymentComplete)