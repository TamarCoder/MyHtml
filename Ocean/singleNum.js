// ეული რიცხვი
// მოცემული გვაქვს ცვლადი:

const couples = [10, 5, 10, 13, 5, 12, 13];


// ყველა ჩანაწერი ორჯერ არის წარმოდგენილი ამ მასივში გარდა ერთისა.

// შექმენით ფუნქცია რომელიც იპოვის იმ ერთ ცალ ეულ რიცხვს და დააბრუნებს:

function euli(couples) {
    let single = 0;

    for (let num of couples) {   
        single ^= num;  
    }
    return single;
}

console.log(euli(couples)); 
 