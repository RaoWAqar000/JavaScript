const name = "Rao"
const RepoCount = 50

console.log(`Hello my name is ${name} and my repoCount is ${RepoCount}`);

 const MyName = new String('Waqar-g')  //another way to declare String

//  console.log(MyName[0])
//  console.log(MyName.__proto__);

//  console.log(MyName.length);
//  console.log(MyName.toUpperCase());
//  console.log(MyName.charAt(2));
//  console.log(MyName.indexOf('q'));

 const newString = MyName.substring(0, 4)
//  console.log(newString);

 const anotherString = MyName.slice(-5, 4)
//  console.log(anotherString);

 const newStringOne = "     WaQar     "
//  console.log(newStringOne);
//  console.log(newStringOne.trim()); //trim remove the spaces of start and end

 const Two = "rao.WaQAr.com.pk"
 console.log(Two.replace('rao', 'RAo'));
 console.log(Two.includes('com'));
 console.log(Two.split('.'));


 //=======PRACTICE======\\

 const KuchBhi = 'My Name is Waqar'
 const falto = '           Aby ja na              '



const a = KuchBhi.at(-2)
console.log(a);

const b = KuchBhi.charAt(3)
console.log(b);

const c = KuchBhi.charCodeAt(4)
console.log(c);

const d = KuchBhi.concat(',' , falto)  //is used to combine two strings
console.log(d);

// const e = KuchBhi.endsWith('waqar') //if string ends with the given value then its true otherwise false
console.log(KuchBhi.endsWith('waqar'));

console.log(KuchBhi.includes('is'))

console.log(KuchBhi.indexOf('n'));

console.log(KuchBhi.lastIndexOf('r')); //if wrong then return -1

console.log(KuchBhi.substring(3, 7));

console.log(KuchBhi.toLowerCase());

console.log(KuchBhi.toUpperCase());

console.log(KuchBhi.replace('Waqar' , 'Rao Waqar'));

console.log(KuchBhi.startsWith('M'));

console.log(KuchBhi.endsWith('r'));

console.log(KuchBhi.split(' ')); //split on the basis of space(" ")

// console.log(KuchBhi.join(', '));

console.log(KuchBhi.length);

console.log(falto.trim());

console.log(falto.trimStart());

console.log(falto.trimEnd());