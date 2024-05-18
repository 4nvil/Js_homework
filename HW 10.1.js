var pattern = /^(?!.*[A]).{6,}$/g;
var str1 = 'My car'; // matches pattern
var str2 = 'My cAr'; // contains 'A'
var str3 = 'Mycar'; // <6

console.log(str1.match(pattern));
console.log(str2.match(pattern));
console.log(str3.match(pattern));