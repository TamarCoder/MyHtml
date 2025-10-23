// მანქანის წვის მიხედვით:

// იგოეთამდე დაჭირდება 10 ლიტრი საწვავი
// გორამდე დაჭირდება 20 ლიტრი საწვავი
// ხაშურამდე დაჭირდება 30 ლიტრი საწვავი
// ქუთაისამდე დაჭირდება 50 ლიტრი საწვავი
// ბათუმამდე დაჭირდება 80 ლიტრი საწვავი

// გამოიანგარიშეთ სადამდე შეძლებს მანქანა ჩაღწევას და მძღოლს ეკრანზე გამოუტანეთ (დალოგეთ) ერთერთი ტექსტი:

// Welcome to Igoeti
// Welcome to Gori
// Welcome to Khashuri
// Welcome to Kutaisi
// Welcome to Batumi

let fuel = 110;

if(fuel >= 80){
    console.log('Welcome to Batumi');
}else if(fuel >= 50){
    console.log('Welcome to Kutaisi');
}else if(fuel >= 30){
    console.log('Welcome to Khashuri');
}else if (fuel >= 20){
    console.log(' Welcome to Gori');
}else if (fuel >= 10){
    console.log(' Welcome to Igoeti');
}else{
    console.log('Not enough fuel');
}



if( fuel >= 160) {
    console.log('Welcome back to Tbilisi')
}else if (fuel >= 150) {
    console.log('Welcome back to Igoeti');
}else if (fuel >= 140){
    console.log('Welcome back to Gori');
}else if(fuel >= 130){
    console.log('Welcome back to Khashuri');
}else if (fuel >= 110){
    console.log('Welcome back to Kutaisi');
}