




const gigosTestResults = [20, 25, 30, 32, 40];

let diff1 = gigosTestResults[1] - gigosTestResults[0];
let diff2 = gigosTestResults[2] - gigosTestResults[1];
let diff3 = gigosTestResults[3] - gigosTestResults[2];
let diff4 = gigosTestResults[4] - gigosTestResults[3]; 

const sum = (diff1 + diff2 + diff3 + diff4) / 4; // 
if (sum >= 5) {  
    console.log('კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ');
} else if (sum >= 2) {
    console.log('რავიცი, ნიჭიერია მარა ზარმაცი');
} else {
    console.log('უხ გიგო გიგოოო');
}