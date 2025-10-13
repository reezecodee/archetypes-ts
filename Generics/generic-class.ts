class Collection<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
    console.log(`Menambahkan item: ${item}`);
  }

  getAll(): T[] {
    return this.items;
  }

  count(): number {
    return this.items.length;
  }
}

const bookCollection = new Collection<string>();

bookCollection.add("Belajar Bahasa Inggris Pemula");
bookCollection.add("Belajar Bahasa Jepang Pemula");

const allBooks: string[] = bookCollection.getAll();
console.log(allBooks);

interface Product {
  id: number;
  name: string;
  price: number;
}

const laptopProduct = new Collection<Product>();

laptopProduct.add({ id: 1, name: "Laptop HP", price: 2000000 });
laptopProduct.add({ id: 2, name: "Laptop Lenovo", price: 3000000 });
laptopProduct.add({ id: 3, name: "Laptop Asus", price: 4000000 });

const allLaptops: Product[] = laptopProduct.getAll();
console.log(allLaptops);

interface Person {
  name: string;
  age: number;
  married: boolean;
  hobbies: Array<string>;
}

interface Item {
  name: string;
  price: number;
  isSecondHand: boolean;
}

class Treasure<K, V> {
  author: K;
  items: V[];

  constructor(author: K, items: V[]) {
    this.author = author;
    this.items = items;
  }

  getTreasure() {
    return {
      author: this.author,
      items: this.items,
    };
  }
}

const budiTreasure = new Treasure<Person, Item>(
  {
    name: "Budi",
    age: 20,
    married: true,
    hobbies: ["Fishing", "Swimming"],
  },
  [
    {
      name: "Laptop HP",
      price: 7000000,
      isSecondHand: false,
    },
    {
      name: "Mobil Honda City",
      price: 100000000,
      isSecondHand: true,
    },
    {
      name: "HP Vivo Y36 5G",
      price: 3000000,
      isSecondHand: false,
    },
  ]
);

const getAllTreasure = budiTreasure.getTreasure();
console.log(getAllTreasure);

interface InventoryItem {
  id: number;
  name: string;
}

class Inventory<T extends InventoryItem> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
    console.log(`Menambahkan ${item.name} ke inventaris`);
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

interface Book {
  id: number;
  name: string;
  author: string;
}

interface Electronic {
  id: number;
  name: string;
  brand: string;
}

const bookInventory = new Inventory<Book>();
bookInventory.addItem({
  id: 1,
  name: "Laut Bercerita",
  author: "Leila S. Chudori",
});

const electronicInventory = new Inventory<Electronic>();
electronicInventory.addItem({
  id: 2,
  name: "Kulkas LG dua pintu",
  brand: "LG",
});

const foundBook = bookInventory.findById(1);
if (foundBook) {
  console.log(
    `Buku berhasil ditemukan dengan judul ${foundBook.name} yang ditulis oleh ${foundBook.author}`
  );
}
