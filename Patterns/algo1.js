// მეზობელი რიცხვების ჯამი

// const array = [3, 3, 2, 5, 6, 1, 2, 4]; 
// const n =  5;

// function sliderWindows (array, n){
//     let finalSum = 0; 

//     for(let i = 0; i < array.length - n ; i ++){
//         let currentSum =  0; 
//         for(let j  =  i; j < n + i; j ++ ){
//             currentSum += array[j]
//         }
//         if(currentSum  > finalSum){
//             finalSum = currentSum
//         }
        
//     }
//     return finalSum; 
// }

// console.log(sliderWindows(array, n));



const word1 = 'silent';
const word2 = 'listen';

function compare(word1, word2) {
    // let boolian  =  true; 

    // for ( let i  = 0; i  < array1.length; i++){
    //     for(let j = 0; j < array2.length; j++){
    //         if(array1[i] === array2[j]){
    //             delete array2[j];
    //             break
    //         }
    //     }
    // };

    // for(let i =  0; i < array2.length; i++){
    //     if(array2[i]){
    //         boolian = false
    //     }
    // }
    // return boolian

    // if(array1.length != array2.length){
    //     return false
    // }
   
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

  console.log(compare(word1, word2));
  
 