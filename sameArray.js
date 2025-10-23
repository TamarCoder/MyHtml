// ფუნქციის დანიშნულებაა შეადაროს 2 მასივი და დააბრუნოს boolean ტიპის პასუხი:

// თუ პირველ მასივში ყველა ჩანაწერს მოეპოვება წყვილი მეორე მასივიდან, დააბრუნოს true

// თუ რომელიმე ჩანაწერი მაინც ვერ დაწყვილდა, დააბრუნოს false

 
const array1 = [1, 2, 3, 4, 5 ];
const array2 = [1, 2, 3, 4, 5];

function compare(array1, array2) {
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

    for(let i = 0; i < array1.length; i++){
        const elemnt = array1[i]; 
       if(object[`${array1[i]}`]){
         object[`${array1[i]}`] ++
       }else{
        object[`${array1[i]}`] = 1; 
       }
       console.log(object);
       
    }

    for(let i = 0; i < array2.length; i++){
        const elemnt = array2[i]; 
       if(object2[`${array2[i]}`]){
         object2[`${array2[i]}`] ++
       }else{
        object2[`${array2[i]}`] = 1; 
       }
      console.log(object2);
       
    }

    for(let elemnt in object){
        if(object[elemnt] != object2[elemnt]){
            boolian  = false; 
            break
        } 
    }

    return boolian

}

  console.log(compare(array1, array2));
  
 