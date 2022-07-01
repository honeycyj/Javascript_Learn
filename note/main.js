// var count = 0;

// var timer= setInterval(() => {
//     count++;
//     if (count>3) {
//         clearInterval(timer);
//         return;
//     }
//     console.log(count);
// }, 1000);

function user(name,age,gender) {
    
    var person = {};
    person.name = name;
    person.age = age;
    person.gender = gender;
    return person;
}

var whh = user('a', 20, "male");
console.log(whh);