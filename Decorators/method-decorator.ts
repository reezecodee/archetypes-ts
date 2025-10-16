import { logMethod } from "./utils/decorator-utils";

class Calculator {
  @logMethod
  add(a: number, b: number): number {
    return a + b;
  }

  @logMethod
  subtrack(a: number, b: number): number {
    return a - b;
  }
}

const calc = new Calculator();
calc.add(10, 10);
console.log('---')
calc.subtrack(10, 5)