import { sealed } from "./utils/decorator-utils";

@sealed
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello, ${this.greeting}`;
  }
}

const goodMorning = new Greeter('Good Morning')
console.log(goodMorning.greet())

// class ExtendedGreeter extends Greeter {}