//თქვენი დავალებაა სექმნატ string.replace  -  ანალოგი ფუნქცია; 
// რომელიც არგუმენტად მიიღებს :
// 1. string - თვითონ სტრინგი
// 2. search - რითაც უნდა იწყებოდეს სტრინგი რომ ფუნქციამ დააბრუნოს true

// ფუნქციამ უნდა დააბრუნოს boolian  -  ტიპის ინფორმაცია 


// function stringStartsWith(string, search) {   
//     return string.startsWith(search)
// }

//  console.log(stringStartsWith( 'hello world', 'hello'));

/// მცდელობა 2 
function stringStartsWith(string, search) {
   for(let i =  0; i < search.length;  i++) {
        // ციკლის მეშეობით გადავრბინე  search -ზე , 
        // ხოლო იფით შევადარე თუ სტრინგის[i] ინდექსზე მდგომი თუ არ უდრის  
                    // მოსაძებნ სიტყვას მაშინ ფოლსია , ხოლო თუ კი თრუ
        if(string[i] !==  search[i] ) {
              return false
        }
   }
   return true
}

console.log(stringStartsWith('hello world', 'aiii'));

 
