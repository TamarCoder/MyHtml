// ბალანსი
// მოცემული გვაქვს ბანკის ამონაწერი მასივში:

const transactionList = [500, -5, 200, -2.50, -100, -80, -160, -11.7, 1000];
// სადაც 0-ს ზემოთ რიცხვი ნიშნავს ანგარიშზე ჩარიცხულ თანხას, 
// ხოლო 0-ს ქვემოთ რიცხვი არის ანგარიშიდან გასული თანხა.
// გამოთვალეთ ბალანსი და ჩაწერეთ ცვლადში:

let balance = 0

for(let i =  0; i < transactionList.length; i ++){
    if(transactionList[i] > 0) {
        balance +=  transactionList[i]
    }else if(transactionList[i] < 0){
        balance +=  transactionList[i]
    }
}

console.log(balance);
