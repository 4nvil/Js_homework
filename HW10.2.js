var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

var emails = [];
var acceptableNameRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?/;
var acceptableDomainRegex = /(@yahoo.com)|(@gmail.com)/i;

for (var i = 0; i < arr.length; i++) {
    let email = arr[i].email;
    if (acceptableNameRegex.test(email) && acceptableDomainRegex.test(email)) {
        emails.push(email);
    }
}

console.log(emails);