// Notification ცენტრი
// თქვენ ხართ Whatsapp-ის დეველოპერი. თქვენი დავალებაა გადაწყვიტოთ როდის მიუვა მომხმარებელს მესიჯის notification და როდის არა.

// თითოეულ მიღებულ მესიჯზე მოცემული გვაქვს ცვლადები:

// const senderIsFriend = false;    
// const senderMuted = false;

// const groupMessage = false;
// const groupMuted = false;
// const userMentioned = false;
const senderIsFriend = false;      //  true  იქნება იმ შემთხვევაში თუ მესიჯი გამოგზავნილია მეგონრის მიერ. 
const senderMuted = false;         // true - ინქბეა იმ სემთხვევაში თუ მეგუბარი დამიუთებული არ გვყავს.
const groupMessage = false;       // true - ინქბეა იმ სემთხვევაში თუ მესიჯი ჯგუფში არის მოსული
const groupMuted = false;       // true - ინქბეა იმ სემთხვევაში თუ ჯგუფი დამიუთული გვაქვს .
const userMentioned = false;     /// // true - ინქბეა იმ სემთხვევაში თუ მოხსენიუბილი ვიქნები შეტყობინებაში

let sendNotification ;
// მომხმარებელს Notification უნდა მიუვიდეს თუ:

// მესიჯის გამგზავნი არის მიმღების მეგობარი და მიმღებს არ ყავს ის დამიუთებული.
// მესიჯი არის ჯგუფში გამოგზავნილი. ამ შემთხვევაში მიმღებს არ უნდა ჰყავდეს ჯგუფი დამიუთებული, ან მესიჯში უნდა იყოს ნახსენები (mentioned).




const dm =  senderIsFriend && !senderMuted; 
const group =  groupMessage && (!groupMuted || userMentioned); 

sendNotification  =  dm || group; 

console.log(sendNotification);

 
// გამოთვალეთ შედეგი და ჩაწერეთ boolean ცვლადში:

// let sendNotification = გამგზავნიმეგობარი && მიმღებიარყავსდამიუთებული || ჯგუფშიგამოგზავნილი && დამიუთებულიჯგუფი  || userMentioned

sendNotification = !(senderIsFriend && senderMuted) || !(groupMessage && groupMessage) || userMentioned; 
console.log(sendNotification);   //-  მცდელობა  1 -------  5/10

sendNotification = !(senderIsFriend && senderMuted) && !(groupMessage && groupMessage) || userMentioned; 
console.log(sendNotification);    // -  მცდელობა 2  -----6/10; 

sendNotification = !(senderIsFriend && senderMuted) && !(groupMessage && groupMuted) || userMentioned; 
console.log(sendNotification)  // მცდელობა 3  ----- 8/10

sendNotification = (!(senderIsFriend && senderMuted) || !(groupMessage && groupMuted)) || userMentioned;
console.log(sendNotification);  // მცდელობა 4  ----- 8/10

sendNotification = (senderIsFriend && !senderMuted) || (groupMessage && (!groupMuted || userMentioned));
console.log(sendNotification);// მცდელობა 5  ----- 10/10   -  თუ მჯეროდეს...... 






 