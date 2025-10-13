function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const names = ["Putri", "Ayu", "Avicenna"];
const firstName = getFirstElement(names);
console.log(firstName?.toUpperCase());

const users = [
  {
    name: "Ayu",
    age: 20,
  },
  {
    name: "Avicenna",
    age: 20,
  },
];

const firstUser = getFirstElement(users);
console.log(firstUser?.name);

function combineArrays<U, T>(arr1: U[], arr2: T[]): (U | T)[] {
  return [...arr1, ...arr2];
}

const combined = combineArrays(["a", "b", "c"], [1, 2, 3]);
console.log(combined);

function printName<T extends { name: string }>(obj: T): string {
  return obj.name;
}

const udin = printName({ name: "Udin", age: 20 });
console.log(udin)