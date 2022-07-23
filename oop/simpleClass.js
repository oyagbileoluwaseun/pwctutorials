class Student {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
}

const Oluwakemi = new Student("Oluwakemi", "Onajinrin", "4-3-1980");
console.log(Oluwakemi);
console.log(Oluwakemi.getFullName());

const Chidu = new Student("Chidu", "Ugochukwu", "4-3-1987");
console.log(Chidu);
console.log(Chidu.getFullName());
