function myIsNaN(value) {
  let type = typeof(value);
  let val = value * 1;
  val = val.toString();

  if (val === "NaN"){
    return true;
  } else if (type === "object" && val === 0|| value === undefined || type === 'function'|| type === "string" && value !== value){
    return true;
  } else if (type === "object" && val !== 0 || type === "boolean" || type === 'number' && val !== "NaN"){
    return false;
  } else return false;
  
}


// examples according to https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/isNaN

function fn(a){
  return a;
}

console.log(myIsNaN(NaN)); // true
console.log(myIsNaN(undefined)); // true
console.log(myIsNaN({})); // true
console.log(myIsNaN(true)); //false
console.log(myIsNaN(null)); //false
console.log(myIsNaN(37)); // false
console.log(myIsNaN("37")); //false
console.log(myIsNaN("33.3")); //false
console.log(myIsNaN(" ")); //false
console.log(myIsNaN("")); //false
console.log(myIsNaN("37,5")); //true
console.log(myIsNaN(new Date())); //false
console.log(myIsNaN(new Date().toString())); // true
console.log(myIsNaN(fn(1))); // false