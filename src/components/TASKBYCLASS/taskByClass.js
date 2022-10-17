export const taskByClass = () => {
  class Worker {
    constructor(name, surname, rate, days) {
      this.name = name;
      this.surname = surname;
      this.rate = rate;
      this.days = days;
    }
    getSalary(rate, days) {
      return this.rate * this.days;
    }
  }

  const worker = new Worker("Inan", "Ivanov", 12, 31);

  console.log(worker.name);
  console.log(worker.surname);
  console.log(worker.rate);
  console.log(worker.days);
  console.log(worker.getSalary());

  class MyString {
    constructor(str) {
      this.str = str;
    }
    reverse(str) {
      let newStr = str.split("").reverse().join("");
      return newStr;
    }
    ucFirst(str) {
      let newStr = str[0].toUpperCase() + str.slice(1);
      return newStr;
    }
    ucWords(str) {
      let arrStr = str.split(" ");
      let newStr = [];
      for (let i = 0; i < arrStr.length; i++) {
        let word = arrStr[i];
        let upWord = word[0].toUpperCase() + word.slice(1);
        newStr.push(upWord);
      }
      return newStr.join(" ");
    }
  }

  const myString = new MyString();

  console.log(myString.reverse("abcde")); //выведет 'edcba'
  console.log(myString.ucFirst("abcde")); //выведет 'Abcde'
  console.log(myString.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde Abcde'
};
