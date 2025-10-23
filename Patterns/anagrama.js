// ანაგრამა ეწოდება ისეთ სიტყვას, რომელიც სხვა სიტყვის ასოების 
// გადანაცვლებით მიიღება, მაგალითად:
// თავი - თივა
// ტახი - ხატი
// silent - listen
// heart - earth

// თქვენი დავალებაა შექმნათ ფუნქცია, რომელსაც პორტალი გამოიძახებს 
// და ჩააწვდის ორ არგუმენტს:
// ფუნქციამ უნდა დააბრუნოს boolean ტიპის პასუხი:

// true - თუ გადმოცემული პირველი არგუმენტი, მეორეს ანაგრამაა
// false - თუ ისინი არ არიან ერთმანეთის ანაგრამები


const word1 = 'silent';
const word2 = 'listen';

function anagram(word1, word2){
    //1. toLowerCase-  გადაიყვანს რომელი  სიმბოლოს დიდია , მაშინ გადაიყვანს  პატარა სიმბოლოში. 

    // 2. split('') -  დაშლის წინადადებას და ისე  შეინახავს. 
            // 's' 'i' 'l' 'e' 'n' 't'   და    'l' 'i' 's' 't' 'e' 'n'; 

    //3. sort()  - ['e', 'i', 'l', 'n', 's', 't']   === ['e', 'i', 'l', 'n', 's', 't']
    
    // return word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('');



    let boolian  =  true; 
    let object = {}; 
    let object2 = {}

    for(let i = 0; i < word1.length; i++){
        const elemnt = word1[i]; 
       if(object[`${word1[i]}`]){
         object[`${word1[i]}`] ++
       }else{
        object[`${word1[i]}`] = 1; 
       }
       //console.log(object);
       
    }

    for(let i = 0; i < word2.length; i++){
        const elemnt = word2[i]; 
       if(object2[`${word2[i]}`]){
         object2[`${word2[i]}`] ++
       }else{
        object2[`${word2[i]}`] = 1; 
       }
      //console.log(object2);
       
    }

    for(let elemnt in object){
        if(object[elemnt] != object2[elemnt]){
            boolian  = false; 
            break
        } 
    }

    return boolian
}

console.log(anagram(word1, word2));


