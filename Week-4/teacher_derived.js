var Person = function(){}

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

function Teacher() {
}

// Setting the prototype to Person of Teacher
Object.setPrototypeOf(Teacher.prototype, Person.prototype)

Teacher.prototype.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}`);
}

var Carl = new Person();

var Jane = new Teacher();

Jane.initialize('Jane', 45);

Jane.teach('inheritance');

// Carl.initialize('Carl', 25);
// Carl.teach('inheritance');
// Carl is Person object so if we call teach it will throw an error