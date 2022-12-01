function Candidate(name, age, stream, grad, school) {
  this.name = name;
  this.age = age;
  this.stream = stream;
  this.grad = grad;
  this.school = function (p) {
    console.log("first Name: " + p.name.firstName);
    console.log("age : " + p.age);
  };
}

const ob = new Candidate("ashley", 21, "science", "iea", "penon");
console.log(ob);
