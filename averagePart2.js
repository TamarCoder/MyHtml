const numbers = [5, 3, 13, 48, 7, 0];
//გამოთვალეთ ცალკე ნეგატიური და ცალკე პოზიტიური რიცხვების საშუალო რიცხვები.

// პასუხი ჩაწერეთ ცვლადში:

let stats = [0, 0, 0]
let negativeSum = 0;
let negativeCount = 0;
let positiveSum = 0; 
let positiveCount = 0;

// 0 ინდექსზე უნდა ჩაწეროთ ნეგატიური რიცხვების საშუალო რიცხვი.
// 1 ინდექსზე უნდა ჩაწეროთ პოზიტიური რიცხვების საშუალო რიცხვი.
// 2 ინდექსზე უნდა ჩაწეროთ 0-ების რაოდენობა.

// თუ მასივში მაგალითად ნეგატიური რიცხვები არ არის მოცემული, ნეგატიური რიცხვების საშუალო რიცხვად ჩაწერეთ 0.

for(let i = 0; i < numbers.length; i ++){
    if(numbers[i] < 0 ){
        negativeSum += numbers[i]; 
        negativeCount += 1; 
        stats[0] =  negativeSum / negativeCount
    }else if(numbers[i] > 0){
        positiveSum += numbers[i]; 
        positiveCount +=1;
        stats[1] = positiveSum / positiveCount
    }else if(numbers[i] === 0) {
        stats[2] += 1
    }
}

console.log(stats);
