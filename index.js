class SuperMath {
  constructor() {
      this.input();
  }

  input() {
    const znakOption = ['+', '-', '*', '/', '%'];

    do {
      this.x = +prompt('Please, enter "x" number');
    } while (isNaN(this.x));
    
    do {
      this.y = +prompt('Please, enter "y" number');
    } while (isNaN(this.y));

    do {
      this.znak = prompt('Please, enter operand to do calculation like + - / * %');
    } while (!znakOption.includes(this.znak));

    return this;
  }

  calculate() {
    let result;
    switch (this.znak) {
      case '+':
        result = this.x + this.y;
        break;
      case '-':
        result = this.x - this.y;
        break;
      case '*':
        result = this.x * this.y;
        break;
      case '/':
        result = this.x / this.y;
        break;
      case '%':
        result = this.x % this.y;
        break;
    }
    return result;
  }

  check() {
    const confirmAction = confirm(`Do you want to calculate ${this.x} ${this.znak} ${this.y} ?`);
  
    if (confirmAction) {
      return this.calculate();
    } else {
      this.input().calculate();
      return this.check();
    }
  }
}

const math = new SuperMath();
console.log(math.check());
