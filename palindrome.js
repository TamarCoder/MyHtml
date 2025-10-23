// პალინდრომი
// პალინდრომი არის სიტყვა, რომელიც წაღმაც და უკუღმაც ერთნაირად იკითხება.



// თქვენი დავალებაა შექმნათ ფუნქცია რომელიც არგუმენტად მიიღებს სტრინგს და დააბრუნებს boolean-ს.
// თუ გადმოცემული სტრინგი პალინდრომია, ფუნქციამ უნდა დააბრუნოს true.

// თუ გადმოცემული სტრინგი არ არის პალინდრომი, დააბრუნოს false.

const word = ''; 


function isPalindrome(word){
    const reversString =  word.split('').reverse().join(''); 
    return word === reversString
}


console.log(isPalindrome('anna'));
 


 