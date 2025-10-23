// მოცემული გვაქვს ცვლადები
const temperature  =  50; 
const scale =  'c'; 
let converted;
// თუ ტემპერატურა მოცემული გვაქვს ცელსიუსში ის უნდა გადავიყვანოთ ფარენჰეიტში; 
// თუ ტემპერატურა მოცემული გვაქვს ფარენჰეიტში ის უნდა გადავიყვანოთ ცელსიუსში;

if(scale == 'c'){
    converted =  (temperature * 9 /5) +32 
     console.log('Celsius');
}else if (scale == 'f'){
    converted =  (temperature - 32) * 5/9
    console.log('Fahrenheit');
}

 




