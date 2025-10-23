
// function mathMin(array) {
//    return Math.min(array)
// }

function mathMin(array) {
    let findMin = array[0] 
    for(let i = 0; i < array.length; i ++){
          if(array[i] < findMin){
            findMin = array[i]
          }
    }
    return findMin
}


 