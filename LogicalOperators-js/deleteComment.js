// კომენტარის წაშლა
// მომხმარებელს სურს კომენტარის წაშლა, მოცემული გვაქვს შემდეგი ინფორმაცია:

const userIsAdmin = true;
const userIsModerator = false;
const userIsCommentAuthor = false;


// იმ შემთხვევაში თუ მომხმარებელი არის ან ადმინისტრატორი, ან მოდერატორი, ანდაც კომენტარის ავტორი, მას შეუძლია კომენტარის წაშლა. სხვა შემთხვევაში ეს ეკრძალება.
// გამოთვალეთ შედეგი და ჩაწერეთ boolean ცვლადში:

let userCanDelete =  (userIsAdmin || userIsModerator || userIsCommentAuthor);

console.log(userCanDelete);
