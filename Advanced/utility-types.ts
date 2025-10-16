// partial
console.log();
console.log('Partial');

interface Product {
  id: number;
  name: string;
  brand: string;
  quantity: number;
}

function updateProduct(id: number, updatedProduct: Partial<Product>) {
  console.log(`Memperbarui produk id ${id} dengan: `, updatedProduct);
}

updateProduct(10, { name: "Laptop HP", brand: "HP" });

// required
console.log();
console.log('Required');

interface Setting {
  theme?: "dark" | "light";
  port?: number;
}

function initializeApp(config: Required<Setting>) {
  console.log(
    `Initializing app on port ${config.port} with ${config.theme} theme.`
  );
}

const fullConfig: Required<Setting> = {
  theme: "dark",
  port: 8080,
};

initializeApp(fullConfig);

// readonly
console.log();
console.log('Readonly');

interface UserTest {
  name: string;
  age: number;
}

const readonlyUser: Readonly<UserTest> = {
  name: "Avicenna",
  age: 20,
};

// readonlyUser.name = 'Al Harits' //error

console.log(readonlyUser);

// record
console.log();
console.log('Record');

type Page = "home" | "about" | "contact";

interface PageInfo {
  title: string;
  path: string;
  isProtected: boolean;
}

const pages: Record<Page, PageInfo> = {
  home: { title: "Beranda", path: "/", isProtected: false },
  about: { title: "Tentang Kami", path: "/about", isProtected: false },
  contact: { title: "Kontak", path: "/contact", isProtected: true },
};

console.log(pages.home.title);

// pick
console.log();
console.log('Pick');

interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

type ArticlePreview = Pick<Article, "id" | "title" | "author">;

const articleForList: ArticlePreview = {
  id: "abc-123",
  title: "TypeScript Utility Types",
  author: "Atyla Azfa",
};

function displayArticlePreview(article: ArticlePreview) {
  console.log(`Judul: ${article.title} oleh ${article.author}`);
}

displayArticlePreview(articleForList);

// omit
console.log();
console.log('Omit');

interface Account {
  id: string;
  username: string;
  name: string;
  password: string;
}

type AccountPreview = Omit<Account, "id" | "password">;

const account: AccountPreview = {
  username: "avicenna",
  name: "Azmi Avicenna",
};

function displayAccountPreview(account: AccountPreview) {
  console.log(`Username: ${account.username} oleh ${account.name}`);
}

displayAccountPreview(account);

// return type
console.log();
console.log('Return Type');

function generateUser(name: string, age: number) {
  return {
    id: Math.random(),
    name: name,
    age: age,
    createdAt: new Date(),
  };
}

type NewUser = ReturnType<typeof generateUser>;

const newUser: NewUser = {
  id: 123,
  name: "Avicenna",
  age: 20,
  createdAt: new Date(),
};

console.log(newUser)
