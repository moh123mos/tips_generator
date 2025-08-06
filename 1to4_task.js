// ✅ Task 1: Self-invoking function to alert sum
(function (a, b) {
  alert(a + b);
})(5, 7);

// ✅ Task 2: for...in, for...of, forEach
const fruits = ["apple", "banana", "cherry"];

console.log("Using for...in:");
for (const index in fruits) {
  console.log(index, fruits[index]);
}

console.log("Using for...of:");
for (const fruit of fruits) {
  console.log(fruit);
}

console.log("Using forEach:");
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});

// ✅ Task 3: Spread operator
const numbers = [1, 2, 3];
const extended = [...numbers, 4, 5];
console.log("Extended array:", extended);

// ✅ Task 4: Student class and template literal
class Student {
  constructor(name, university, faculty, finalGrade) {
    this.name = name;
    this.university = university;
    this.faculty = faculty;
    this.finalGrade = finalGrade;
  }

  printInfo() {
    console.log(
      `${this.name} is a student in faculty of ${this.faculty} in university ${this.university}`
    );
  }
}

const student1 = new Student("Ahmed", "Cairo University", "Engineering", 88);
student1.printInfo();
