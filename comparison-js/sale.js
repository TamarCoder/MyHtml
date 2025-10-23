const total = 1500;

const salePercentage = 18;

const targetDiscount = 100;


let totalPay = (total * salePercentage) / 100;

let canBuy =  totalPay >= targetDiscount
console.log(canBuy);





// დათვალეთ დანაზოგი და თუ ის ტოლია ან აღემატება სასურველ დანაზოგს, მხოლოდ მაშინ შეიძინოთ ნივთი.

// ჩაწერეთ boolean ტიპის პასუხი ცვლადში: