const person = {
  first: "ahmed",
  lastName: " Ibrahim",
  des: function () {
    return this.first + " " + this.desc;
  },
};

const descs = {
  desc: "is good",
};

console.log(person.des.call(descs));
