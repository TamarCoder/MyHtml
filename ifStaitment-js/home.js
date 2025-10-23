// თუ ტელეფონი 100 პროცენტზე ნაკლებია და შეერთებულია ტელეფონი უნდა დაიტენოს თუ 
// არადა თუ ტელეფონი ზუსტად ასი პროცენტია და მაინც შეერთებული დარჩა პატრონს
// დალოგე 'Please unplug the charger! Othevise it will cost a lot of damage!'
// დაnchargePhone ცვლადში ჩაწერე შესაბამისი ბულეან მნიშვნელობა.



let batteryPercentage = 99; 
let isPluggedIn = true; 
let chargePhone;

if (batteryPercentage < 100 && isPluggedIn) {
    chargePhone = true;
} else if  (batteryPercentage === 100 && isPluggedIn)  {
    console.log("Please unplug the charger! Otherwise, it will cause a lot of damage!");
    chargePhone =  false;
}

console.log(chargePhone);


// თუ მაღაზია ღიაა და მომხმარებელს აქვს საკმარისი ფული, მას შეუძლია ნივთის ყიდვა.
//  თუ მაღაზია დაკეტილია ან ფული არ ჰყოფნის, უნდა გამოვიტანოთ შეტყობინება:
// “Sorry, you can’t buy this item right now.”

let superMarketIsOpen = true; // მაღაზია ღიაა
let userHasEnoughBalance = true; // მომხმარებელს აქვს საკმარისი ფული

if (superMarketIsOpen && userHasEnoughBalance) {
    console.log("Customers can buy the item.");
} else {
    console.log("Sorry, you can’t buy this item right now.");
}


// თუ მანქანის საწვავი 10%-ზე ნაკლებია და უახლოესი ბენზინგასამართი სადგური 5 კმ-ზე მეტ მანძილზეა, 
// მძღოლს უნდა გავაფრთხილოთ: “Warning! Your fuel is low, and the nearest station is far away!”


let fuelLevel = 6;  
let fuelCapacity = 60;  
let nearestStationDistance = 7;  

// ვთვლით საწვავის 10%-ს
let fuelThreshold = fuelCapacity * 0.1;

// ვამოწმებთ პირობას
if (fuelLevel < fuelThreshold && nearestStationDistance > 5) {
    console.log('Warning! Your fuel is low, and the nearest station is far away!');
}else{
    console.log('you can continuation drive ');
    
}

// თუ მანქანის სიჩქარე აჭარბებს სიჩქარის ლიმიტს, უნდა გამოვიტანოთ გაფრთხილება:
// “Slow down! You are over the speed limit!”

let currentSpeed = 130; 
let speedLimit =  120;

if(currentSpeed > speedLimit){
    console.log('Slow down! You are over the speed limit!');
}else {
    console.log('good job, have a nice trip');
    
}




// გაქვს სამი სხვადასხვა მთელი რიცხვი.  თუ მათი ჯამი ლუწია, უნდა დააბრუნო მათი ნამრავლი.
// თუ კენტი - უნდა დააბრუნო ყველაზე დიდი რიცხვი მათგან.


let number1 =  10; 
let number2 = 20;
let number3 = 30;

const numberSum   = number1 + number2 + number3; 
let numberMultiplication; 
let biggestNum;

if(numberSum % 2 == 0){
    numberMultiplication = number1 * number2 * number3; 
    console.log("ნამრავლი:",  numberMultiplication);
}else   if (number1 >= number2 && number1 >= number3) {
    biggestNum = number1;
} else if (number2 >= number1 && number2 >= number3) {
    biggestNum = number2;
} else {
    biggestNum = number3;
    console.log("ყველაზე დიდი რიცხვი:", biggestNum);
}
 

// მომხმარებელი შეყვანს პაროლს. თუ პაროლი შეიცავს როგორც დიდ, ისე პატარა ასოებს, 
// მინიმუმ ერთ ციფრს და ერთ სპეციალურ სიმბოლოს (!@#$%^&*), უნდა დაბეჭდო "ძლიერი პაროლია"; 
// თუ აკლია რომელიმე პირობა, უნდა დაბეჭდო "სუსტი პაროლია".



// თამაშში მოთამაშეს აქვს 3 სიცოცხლე.
	// თუ სიცოცხლე 0-ზე ნაკლებია, უნდა დაბეჭდო "Game Over".
	// თუ სიცოცხლე ზუსტად 1-ია, უნდა დაბეჭდო "Danger!".
	// 2 სიცოცხლისას "Be Careful!".
	// 3 სიცოცხლისას "Safe Zone".

let life = 5; 

if (life <= 0){
    console.log('Game Over');
}else if (life == 1){
    console.log('Danger!');
}else if(life == 2){
    console.log('Be Careful!');
}else{
    console.log('Safe Zone');
}


// ლოგიკა, რომელიც ადგენს, სამუშაო დღეა თუ არა.
	// თუ დღეა ორშაბათი-პარასკევი, უნდა დააბრუნო "სამუშაო დღეა"
	// თუ დღეა შაბათი ან კვირა, უნდა დააბრუნო "დასვენების დღეა"
	// თუ შეყვანილია არასწორი დღე, უნდა დააბრუნო "არასწორი შეყვანა".


let day = 'ორშაბათი'

let errorDay; 

if (day == 'ორშაბათი'){
    console.log('სამუშაო დღეა');
}else if(day == 'სამშაბათი'){
    console.log('სამუშაო დღეა');
}else if(day == 'ოთხშაბათი'){
    console.log('სამუშაო დღეა');
}else if(day == 'ხუთშაბათი'){
    console.log('სამუშაო დღეა');
}else if(day == 'პარასკევი'){
    console.log('სამუშაო დღეა');
}else if(day == 'შაბათი'){
    console.log('დასვენების დღეა');
}else if(day == 'კვირა'){
    console.log('დასვენების დღეა');
}else{
    console.log('არასწორი შეყვანა');
}

if (day == 'ორშაბათი' || day == 'სამშაბათი' || day == 'ოთხშაბათი' || day == 'ხუთშაბათი' || day == 'პარასკევი'){
    console.log('სამუშაო დღეა');
}else if(day == 'შაბათი' || day == 'კვირა'){
    console.log('დასვენების დღეა');
}else{
    console.log('არასწორი შეყვანა');
}



// მომხმარებელი შეიყვანს სამ რიცხვს.
	// თუ სამივე რიცხვი ტოლია, უნდა დააბრუნო "სამივე ერთნაირია"
	// თუ ორი რიცხვი ტოლია, უნდა დააბრუნო "ორი ერთნაირია"
	// თუ სამივე განსხვავებულია, უნდა დააბრუნო "სამივე განსხვავებულია"

let num1 = 30;
let num2 = 10;
let num3 = 30; 

let sum;

if ( num1 === num2 && num1 === num3 && num2 === num3) {
    console.log('სამივე ერთნაირია');
}else if( num1 === num2 || num1 ===  num3 || num2 === num3){
    console.log('ორი ერთნაირია');
}else{
    console.log('სამივე განსხვავებულია');
    
}



// მოცემულია პირობა, თუ რომელიმე პიროვნება ასაკით 18 წელზე უფროსია:
// 	თუ ის 18 წლამდეა, და მუშაობს სრულ განაკვეთზე, დაიბეჭდება „მთავარი სამსახური“.
// 	თუ ის 18 წლამდეა, და მუშაობს ნახევარ განაკვეთზე, დაიბეჭდება „მასწავლებელი/სტუდენტი“.
// 	თუ ის 18 წელს გადაცილებულია, და მუშაობს სამსახურში, დაიბეჭდება „ძირითადი მუშაობა“.
// 	თუ ის 18 წელს გადაცილებულია, მაგრამ დასვენების თვეებშია, დაიბეჭდება „მთელი დრო მუშაობს დასვენება“.




let person = 22; 

let fullTime =  true
let halfTime = false

if(person === 18 && fullTime){
    console.log('მთავარი სამსახური');
}else if(person === 18 && halfTime){
    console.log('მასწავლებელი/სტუდენტი');
}else if( person > 18 && fullTime){
    console.log('ძირითადი სამუშაო');
}else {
    console.log('არ მუშაობს სრულ ან ნახევარ განაკვეთზე');
}





// მოცემულია ტემპერატურა (ცელსიუსი) და კლიმატი (მზიანი, წვიმიანი, თოვლიანი). დაწერეთ ალგორითმი:
// 	თუ ტემპერატურა აღემატება 30°C და კლიმატი მზიანია, დაიბეჭდება „ცხელი და მზიანი დღეა“.
// 	თუ ტემპერატურა აღემატება 30°C და კლიმატი წვიმიანია, დაიბეჭდება „ცხელი და წვიმიანი დღეა“.
// 	თუ ტემპერატურა -10°C-ია და კლიმატი თოვლიანი, დაიბეჭდება „ძალიან ცივი და თოვლიანი დღეა“.
// 	თუ ტემპერატურა 0°C-ია, და კლიმატი მზიანი, დაიბეჭდება „ნეიტრალური დღე“.
// 	თუ ტემპერატურა 0°C-ია და კლიმატი წვიმიანი, დაიბეჭდება „კარგი დღე წვიმაში“.


let celsius = 35; 
let climat =  'sunny day'

if(celsius > 30 && climat === 'sunny day'){
    console.log('Hot and sunny day');
}else if(celsius > 30 && climat === 'rainy day.'){
    console.log('Hot and rainy day');
}else if( celsius < -10 && climat === 'snowy day'){
    console.log('Very cold and snowy day');
}else if (celsius === 0  && climat === 'sunny day'){
    console.log('Neutral day');
}else if(celsius === 0 && climat === 'rainy day'){
    console.log('A good day in the rain');
}




 
 




