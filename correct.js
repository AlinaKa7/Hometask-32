const OPERATIONS = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
  };
  
  class SuperMath {
    constructor() {
      this.input();
    }
  
    input() {
      do {
        this.x = +prompt('Enter x?');
      } while (isNaN(this.x));
      
      do {
        this.y = +prompt('Enter y?');
      } while (isNaN(this.y));
  
      do {
        this.znak = prompt(`Enter ${this.getOperations()} ?`);
      } while (!OPERATIONS[this.znak]);
  
      return this;
    }
  
    check() {
      const confirFromUser = confirm(`Do you want to do this ${this.x} ${this.znak} ${this.y}?`);
      
      return confirFromUser ? OPERATIONS[this.znak](this.x, this.y) : this.input().check();
    }
  
    getOperations() {
      return Object.keys(OPERATIONS).join(', ');
    }
  }
  
  const math = new SuperMath();
  
  console.log(math.check());
  