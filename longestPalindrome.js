"use strict";
//  უნდა შევქმნა ფუქნცია რომელსაც უნდა გავაცე არგუმენტად
// მიიღებს სტრინგს, და დააბრუნოს ნებისმიერი სიგრძის პალინდრომი;
function longestPalindrome(s) {
    let longest = ''; //  ყველაზე გრძლეი სტრინგისთვის;
    // დატატრიალე ფორ ციკლი შეყვანილ სტრინგზე;
    for (let i = 0; i < s.length; i++) {
        checkLeftAndRight(i, i); // კენტი სიგრძის პალინდრომი
        checkLeftAndRight(i, i + 1); // ლუწი სიგრძის პალინდრომი
    }
    // ფუნქცია რათა შევამოწო მარჯვენა და მარცხენა სიიმბოლოები ერთნაირია თუ არა
    function checkLeftAndRight(left, right) {
        // თუ მარცხნა სიმბოლო მეტია 0 და მარჯვენაზე, ნაკლებია სტრინგის სიგრძეზე რომელიც  უდრის ერთმანეთს
        if (left >= 0 && right < s.length && s[left] === s[right]) {
            // თუ ჩემი სტრინგი უფრო  დიდია ვიდრე აქამდე შენახული სტრინგი,ახალი ნაპოვნი სტრინგი გახდება ყველაზე გრძელი.
            if (right - left + 1 > longest.length) {
                longest = s.slice(left, right + 1);
            }
            left--;
            right++;
        }
    }
    return longest;
}
console.log(longestPalindrome('adde'));
