// // გამოცდის ქულების სტატისტიკა
// // მოცემული გვაქვს გიგოს ყველა საგნის გამოცდის ქულები ერთ მასივში:

const gigosResults = [10, 50, 76, 100, 98, 230, 47, 51];
// // 1. დათვალეთ რამდენი საგანი ჩააბარა(50 ქულა ან მეტი) გიგომ და ჩაწერეთ ეს ინფორმაცია ცვლადში:
let gigosPassCount = 0;
// // 2. დათვალეთ რამდენ საგანში ჩაიჭრა გიგო და ჩაწერეთ ეს ინფორმაცია ცვლადში:
let gigosFailCount = 0;
// // 3. იპოვეთ ყველაზე მაღალი ქულა და ჩაწერეთ ეს ინფორმაცია ცვლადში
let gigosMaxScore = gigosResults[0];
// // 4. იპოვეთ ყველაზე დაბალი ქულა და ჩაწერეთ ეს ინფორმაცია ცვლადში:
let gigosMinScore = gigosResults[0];
// // P.S. თითოეული გამოცდის შედეგი შეიძლება იყოს მინუს უსასრულობიდან პლუს უსასრულობამდე ნებისმიერი რიცხვი.

// // ნაბიჯი1: მოცემული მაქვს gigosResults -  სადაც მისი თითოეული საგნის ქულა შეტანილი; 
// // ნაბიჯი2: for ლუპის დახმარებით გადავურბინო მასივს და  მივწვდე მასივის ყველა ინდექს. 
// // ნაბიჯი3 :  დავწერო if - პირობა სადაც  შევამოწმებთ : 
// //            თუ გიგომ  რამდენ  საგანში გადალახა 50 ქულინი ბარიერი ეს შევიტანო gigosPassCount; 
// //            თუ გიგომ  რამდენ  საგანში ჩაიჭრამ, ანუ 50 ქულინი ბარიერი  ვე რგადალახა ეს შევიტანო gigosFailCount; 
// //            გიგოს მიღებული ქულებიდნა რომელია ყველაზე მარალი და ჩავწერო gigosMaxScore
// //            გიგოს მიღებული ქულებიდნა რომელია ყველაზე დაბალი და ჩავწერო gigosMinScore
 
for(let i = 0; i < gigosResults.length; i++){
    if(gigosResults[i] >= 50){
        gigosPassCount += 1
    }else if(gigosResults[i] < 50){
        gigosFailCount += 1; 
    }
    for(let j = 0; j < gigosResults.length; j ++){
        if(gigosResults[j] > gigosMaxScore){
            gigosMaxScore = gigosResults[j];
        }else if (gigosResults[j] <  gigosMinScore){
            gigosMinScore =  gigosResults[j]
            
            
        }
    }
}

console.log('გიგომ ჩააბარა:', gigosPassCount, 'საგანი');
console.log('გიგო ჩაიჭრა:', gigosFailCount,  ' საგანში');
console.log('გიგოს მაქსიმალური ქულა არის:', gigosMaxScore, 'ქულა');
console.log('გიგოს მინიმალური ქულა არის:' , gigosMinScore, 'ქულა');
 
 