// const tinderuser = new Object()

const tinderuser = {};
tinderuser.id = "123abc";
tinderuser.name = "Rao";
tinderuser.isLoggedIn = "true";
tinderuser.num = 123;

// console.log(tinderuser);

const regularuser = {
  email: "Rao@gmail.com",
  fullname: {
    username: {
      firstname: "Rao",
      lastname: "Waqar",
    },
  },
};

// console.log(regularuser.fullname.username.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = { ...obj1, ...obj2 };

// console.log(obj4);

const users = [
  {
    id: "123",
    email: "qwerty",
  },
  {
    id: "123",
    email: "qwerty",
  },
  {
    id: "123",
    email: "qwerty",
  },
];

// console.log(users[1].email);
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggod'));
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));

// console.log(tinderuser.name.toString());
// console.log(tinderuser.name.toLocaleString());
// console.log( typeof tinderuser.name.toString());

var number = 1234567.89;
var localizedString = number.toLocaleString();
// console.log(localizedString);


const course = {
  name : "Js in hindi",
  price : "999",
  courseInstructer : "Hitesh"
}

// course.courseInstructer

const {courseInstructer: instructer} = course;

// console.log(courseInstructer);
console.log(instructer);

{
  //API
}


