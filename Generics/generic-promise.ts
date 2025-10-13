interface User {
  id: number;
  name: string;
  age: number;
}

function fetchUser(userId: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const db: User[] = [
        {
          id: 1,
          name: "Ayu Avicenna",
          age: 20,
        },
        {
          id: 2,
          name: "Putri Avicenna",
          age: 20,
        },
      ];

      const user = db.find((user) => user.id === userId);

      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
}

// pake .then
fetchUser(2)
  .then((user) => {
    console.log(`Pengguna ditemukan : ${user.name}`);
  })
  .catch((error) => {
    console.log(`Gagal : ${error}`);
  });

// pake async/await

async function displayUser() {
  try {
    console.log("Mengambil user dengan async/await...");
    const user = await fetchUser(1);

    console.log(`Pengguna ditemukan : ${user.name}`);
  } catch (error) {
    console.log(`Gagal : ${error}`);
  }
}

displayUser();
