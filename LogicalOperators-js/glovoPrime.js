// შენ ხარ Glovo-ს დეველოპერი. შენი დავალებაა გაარკვიო რა დაუჯდება კლიენტს პროდუქციის ტრანსპორტირება.

// მოცემული გვაქვს ცვლადები:

const isPrime = false; // ვინც ამ სერვისით სარგებლობს, მათთვის ტრანსპორტირება უფასოა
const distance = 5; // რესტორნიდან კლიენტამდე დისტანცია კილომეტრებში
const kmPrice = 1.2; // კილომეტრის საფასური


// გამოთვალეთ შედეგი და ჩაწერეთ მიწოდების ღირებულება number ცვლადში:

 
// let deliveryPrice = isPrime && (distance * kmPrice);
// let deliveryPrice = false && (6); //false
let deliveryPrice = !isPrime && (distance * kmPrice);
// deliverPrice =  true && 6 //  6. 
console.log(deliveryPrice);

// P.S. თუ მომხმარებელს უფასოდ ეკუთვნის მიტანა, მაშინ ცვლადში ჩაწერეთ false.