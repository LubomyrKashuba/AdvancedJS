//Task 1
class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

const worker = new Worker("Ivan", "Ivanov", 10, 31);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

//Task 2
class MyString {
  constructor() {}
  reverse(str) {
    let arr = str.split("");
    let reversArr = arr.reverse();
    str = reversArr.join("");
    return str;
  }
  ucFirst(str) {
    return str[0].toUpperCase() + str.substring(1);
  }
  ucWords(str) {
    let arr = str.split(" ");
    let newArr = arr.map((item) => {
      item = item[0].toUpperCase() + item.substring(1);
      return item;
    });
    str = newArr.join(' ');
    return str;
  }
}

const str = new MyString();
console.log(str.reverse("IVAN"));
console.log(str.ucFirst("arsenal"));
console.log(str.ucWords('arsenal arsenal arsenal'));
