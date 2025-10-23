// თქვენი დავალებაა შექმნათ String.includes ფუნქციის ანალოგი:
//რომელიც მიიღებს string-ს და substring-ს.
//თქვენი დავალებაა შეამოწმოთ თუ შეიცავს string-ი substring-ს და დააბრუნოთ boolean ტიპის პასუხი ფუნქციიდან.



// function stringIncludes(string, substring) {
//      return string.includes(substring)
// }

// console.log(stringIncludes('Hello Novatori', 'Novatori'))  
 
// ვარიანტი 2
function stringIncludes(string, substring) {
    let isTrue = true;

     // თუ ჩემი გადაცემული სიტყვა ცარიელი იქნება , ეს იქნება ჩემი ეჯ ქეისი და დმიბრუნე  თრუ. 
    if (substring.length === 0) {
        return true;
    }

    // გადავირბინე სტრინგიზე და გამოავაკლო ჩემს მიერ შეყვანილი სიტყვა 
    for (let i = 0; i <= string.length - substring.length; i++) {
        isTrue = true; // თავიდან ვთვლით ყოველი პოზიციისთვის

        // ვადარებთ სიმბოლოებს სტრინგიდან და საძიებლიდან
        for (let j = 0; j < substring.length; j++) {
            if (string[i + j] !== substring[j]) {
                isTrue = false;
                break;
            }
        }

        // თუ ჩემი გაადცემული სიტყვა  სწორია  — ვაბრუნებთ true
        if (isTrue) {
            return true;
        }
    }
    return false;
}

console.log(stringIncludes('Hello Novatori', 'Novatori')); 



 