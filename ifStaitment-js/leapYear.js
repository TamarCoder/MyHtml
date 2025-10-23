//წელიწადი ნაკიანია თუ ის იყოფა 4-ზე. ისეთი წლების გარდა რომელიც იყოფა 100-ზე. 
// ასეთი წელიწადი ნაკიანია იმ შემთხვევაში, თუ ის იყოფა 400-ზე


const year = 2023;

let isLeapYear;

isLeapYear = (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0); 

// console.log(isLeapYear);

// if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
//     isLeapYear =  true
// }else{
//    isLeapYear =  false
    
// }
// console.log(isLeapYear);


switch (year) {
    case  2023:
        console.log(isLeapYear);
         break
    case 2024:
        console.log(isLeapYear);
        break
    default:
         console.log("this year not found");
        
}

 
 