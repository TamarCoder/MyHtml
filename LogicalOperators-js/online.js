const userPaid =  true;
const userIsAdmin =  false;

const courseIsOnline = false; // თუ კურსი იმ მომენტში მიმდინარეობს, ეს ცვლადი ხდება true
const courseHasRecording = true; // თუ კურსს აქვს ვიდეო ჩანაწერი, ცვლადი ხდება true

// მომხმარებელი უნდა შევუშვათ კურსზე ორ შემთხვევაში: თუ მას თანხა აქვს გადახდილი ან არის ადმინი.
// ასევე, თუ კურსი არც მიმდინარეობს და არც ვიდეო ჩანაწერი გააჩნია, რა თქმა უნდა მომხმარებელს ვერც ამ შემთხვევაში შევუშვებთ.

// დათვალეთ შედეგი და ჩაწერეთ boolean ცვლადში:

let userCanEnter = (userPaid || userIsAdmin) && (courseIsOnline || courseHasRecording);
console.log(userCanEnter);

