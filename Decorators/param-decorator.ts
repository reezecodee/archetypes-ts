import "reflect-metadata";
import { validateParams, required } from "./utils/decorator-utils";

class Order {
  @validateParams
  placeOrder(productName: string, @required quantity: number) {
    console.log(`Memesan ${quantity} buah ${productName} `);
  }
}

const myOrder = new Order();

console.log("Mencoba panggilan yang valid...");
myOrder.placeOrder("Mouse", 2);

console.log("\n--------------------------\n");

console.log("Mencoba panggilan yang tidak valid...");
try {
  const badArguments: any[] = ["Laptop"];
  myOrder.placeOrder(...badArguments);
} catch (error) {
  console.error(`ERROR: ${error}`);
}
