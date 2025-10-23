// ფუნქციის დანიშნულებაა იპოვოს და დააბრუნოს უგრძესი პრეფიქსი, რომელსაც იზიარებს მასივში
// არსებული ყველა სტრინგი.
//  ანუ მე უნდა შევქმნა ფუნქცია რომლის მიხედვითაც შეადარებს ორ სტრინგს ერთმანეთშ და
//  გამოიტანს იმ  სიმბოლოთა თანხვედრს რაც ამ ორ სტირნგ  ერთნაირი აქვს.
// მაგ: ['flower', 'flow']   // flow
function longestPrefix(array) {
    // 1. უნდა გადავირბინო ციკლით ერეიზე და ამოვიღო თითოეული ელემენტი;
    let str = array[0];
    for (let i = 0; i < array.length; i++) {
        // console.log(str)
        for (; array.indexOf(str) !== 0;) {
            str = str.substring(0, array.length);
            if (str === "") {
                return "";
            }
        }
    }
    return str;
}
console.log(longestPrefix(['flower', 'flow']));
