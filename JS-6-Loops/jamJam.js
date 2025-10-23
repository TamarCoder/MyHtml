
// მოცემული გვაქვს ცვლადები:

const oddStart = 1000;
const oddEnd = 2000;
const evenStart = 500;
const evenEnd = 800;

let oddSum = 0
let evenSum = 0
let sum = 0;


for (let i = oddStart; i < oddEnd; i++) {
    if (i % 2 !== 0) {   
      oddSum = oddSum + i
    } 
}

for (let j = evenStart; j < evenEnd; j++) {
    if (j % 2 === 0) {
        evenSum =  evenSum + j
    }
}

sum = oddSum + evenSum;
console.log(sum);



 




 



