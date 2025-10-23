// საშუალო
// მოცემული გვაქვს რიცხვების მასივი:

const numbers = [5, 3, 13, 48, 7, 0];


// გამოთვალეთ ამ რიცხვების საშუალო და ჩაწერეთ ცვლადში:

let average = 0;

for(let i =  0; i < numbers.length; i ++){
    average += numbers[i] / numbers.length
}

console.log(`მასივის საშუალო არითმეტიკული არის ${average}`);


