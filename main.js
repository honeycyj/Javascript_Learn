// console.log(1);
function User(name,age) {
    this.name =name;
    this.age = age;

    this.eat = function () {
        console.log("mia,mia,mia");
    }
}
 var whh = new User('w',19);
 whh.eat();